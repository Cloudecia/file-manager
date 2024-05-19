import { Link } from "react-router-dom";
import Logo from "./Logo";
// import Search from './Search';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/reusables/ui/avatar";
import useFileManagerSidebar from "@/hooks/useFileManagerSidebar";
import { CiEdit } from "react-icons/ci";
import SideNav from "./SideNav";
import { CiCamera } from "react-icons/ci";

function Sidebar() {
  const fileManagerSidebar = useFileManagerSidebar();
  return (
    <>
      <div
        className={`min-w-[18rem] fixed xl:sticky top-0 h-screen z-50 xl:z-auto bg-white dark:bg-zinc-800 flex flex-col justify-between xl:border-r-[1px] dark:border-zinc-800  ${
          fileManagerSidebar.isCollapsed && "-translate-x-[120vw] xl:translate-x-0"
        }  transition duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex flex-col gap-4">
          {/* LOGO */}

          <div className="py-4 relative h-[4.5rem] bg-brand-500 grid place-content-center">
            <Logo />
            {/* <MainSidebarToggler /> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-y-4">
            <Avatar className="h-28 w-28 relative group">
              <AvatarImage alt={"user.email"} />
              <AvatarFallback className="grid place-content-center text-3xl">{"AB"}</AvatarFallback>
              <Link
                to={`/dashboard/profile/avatar`}
                className="bg-brand-100 h-full w-full absolute hidden place-content-center group-hover:grid cursor-pointer"
              >
                <CiCamera className="h-8 w-8" />
              </Link>
            </Avatar>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold relative">Abhinav Joshi </h3>
              <h5 className="">Gold Package Customer</h5>
            </div>
          </div>

          {/* MENUS */}
          <SideNav />
        </div>
        <div className="flex justify-center mb-4"></div>
        {/* FOOTER */}
      </div>
    </>
  );
}

export default Sidebar;
