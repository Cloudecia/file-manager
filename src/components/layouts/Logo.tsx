import { Link } from "react-router-dom";
import LogoEl from "@/components/elements/Logo";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import useFileManagerSidebar from "@/hooks/useFileManagerSidebar";
const Logo = () => {
  const fileManagerSidebar = useFileManagerSidebar();

  return (
    <>
      <div className="flex justify-between xl:justify-center items-center px-7">
        <Link to="/" className="font-bold flex gap-1 items-baseline justify-center text-lg relative top-[2px] text-zinc-100">
          <LogoEl logoWidth={24} textFontSize={24} logoFillColor="#ffffff" textColor="white" />
        </Link>
        <div className="xl:hidden">
          {fileManagerSidebar.isCollapsed ? (
            <GoSidebarCollapse
              className="h-4 w-4  [&_*]:text-zinc-100"
              onClick={() => {
                fileManagerSidebar.onOpen();
              }}
            />
          ) : (
            <GoSidebarExpand
              className="h-4 w-4 [&_*]:text-zinc-100"
              onClick={() => {
                fileManagerSidebar.onCollapse();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Logo;
