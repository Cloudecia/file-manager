import { fileList } from "@/assets/data/dummyFileListSeed";
import Container from "@/components/reusables/Container";
import SectionWrapper from "@/components/reusables/SectionWrapper";
import { Button } from "@/components/reusables/ui/button";
import { Checkbox } from "@/components/reusables/ui/checkbox";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/reusables/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/reusables/ui/dropdown-menu";
import { Input } from "@/components/reusables/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/reusables/ui/table";
import { cn } from "@/utils/shadcn-helper";
import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon } from "@radix-ui/react-icons";
import {
  Column,
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { MdHome, MdOutlineCreateNewFolder, MdOutlineDriveFolderUpload, MdOutlineUploadFile } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbCopyPlus, TbCut, TbDownloadOff, TbInfoCircle } from "react-icons/tb";
import { ImPaste } from "react-icons/im";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { formatDistanceToNow } from "date-fns";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/reusables/ui/breadcrumb";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({ column, title, className }: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
            <span className="p-4 font-bold">{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const columnHelper = createColumnHelper<File>();

function RowActionsDropDown() {
  return (
    <DropdownMenuContent align="end" className="min-w-52">
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbInfoCircle /> File Information
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbDownloadOff /> Download
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <MdOutlineDriveFileRenameOutline /> Rename
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbCut /> Cut
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <TbCopyPlus /> Copy
      </DropdownMenuItem>
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <ImPaste /> Paste
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
        <MdOutlineDelete /> Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}

const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="block"
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" className="block" />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "basis-1/10",
    },
  }),
  columnHelper.accessor((row) => row.attributes.name, {
    id: "fileName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="First Name" />,
    cell: (props) => (
      <div className="flex items-center gap-2">
        <GoFileDirectory className="w-5 h-5 relative bottom-[2px]" /> <span>{props.getValue()}</span>
      </div>
    ),
    meta: {
      className: "basis-6/12",
    },
  }),
  columnHelper.accessor((row) => row.attributes.lastModifiedOn, {
    id: "lastModifiedOn",
    header: "Last Modified",
    cell: (props) => (
      <span>
        {formatDistanceToNow(new Date(props.getValue()), {
          includeSeconds: true,
          addSuffix: true,
        })}
      </span>
    ),
    meta: {
      className: "basis-3/12",
    },
  }),
  columnHelper.display({
    id: "actions",
    enableHiding: false,
    enableSorting: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <RowActionsDropDown />
          </DropdownMenu>
        </div>
      );
    },
    meta: {
      className: "basis-1/12",
    },
  }),
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, Tvalue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      rowSelection,
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <Input
          placeholder="Filter by filename"
          value={(table.getColumn("fileName")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("fileName")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-12">Add New</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-52">
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <MdOutlineCreateNewFolder className="relative bottom-[2px]" /> New Folder
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <MdOutlineUploadFile className="relative bottom-[2px]" /> File Upload
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
              <MdOutlineDriveFolderUpload className="relative bottom-[2px]" /> Folder Upload
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className={`${header.column.columnDef?.meta && header.column.columnDef.meta?.className}`}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <ContextMenu>
                <ContextMenuTrigger>
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="cursor-pointer">
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className={`${cell.column.columnDef?.meta && cell.column.columnDef.meta?.className}`}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-52 bg-white">
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <TbInfoCircle /> File Information
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <TbDownloadOff /> Download
                  </ContextMenuItem>
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <MdOutlineDriveFileRenameOutline /> Rename
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <TbCut /> Cut
                  </ContextMenuItem>
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <TbCopyPlus /> Copy
                  </ContextMenuItem>
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <ImPaste /> Paste
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="flex gap-2 items-center cursor-pointer">
                    <MdOutlineDelete /> Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </>
  );
}

const Home = () => {
  return (
    <Container>
      <SectionWrapper noDivider>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" asChild>
                <Link to="/" className="flex gap-1 items-center">
                  <MdHome className="w-4 h-4 bottom-[2px] relative" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Folder 1</DropdownMenuItem>
                  <DropdownMenuItem>Folder 2</DropdownMenuItem>
                  <DropdownMenuItem>Folder 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Folder 4</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Folder 5</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SectionWrapper>
      <SectionWrapper>
        <DataTable columns={columns} data={fileList} />
      </SectionWrapper>
    </Container>
  );
};

export default Home;
