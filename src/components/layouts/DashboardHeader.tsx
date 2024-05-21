import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useMainSidebar from '../../../hooks/useMainSidebar';
import { Button } from "@/components/reusables/ui/button";
import { FaRegQuestionCircle } from "react-icons/fa";
// import useMeridiem from '../../../hooks/useMeridiem';
import { RiLogoutBoxLine } from "react-icons/ri";
import Container from "../reusables/Container";

import useDashboardPageTitle from "@/hooks/useDashboardPageTitle";
import useFileManagerSidebar from "@/hooks/useFileManagerSidebar";
import { GoLinkExternal, GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
function Navbar({ className }) {
  const fileManagerSidebar = useFileManagerSidebar();
  // const mainSidebar = useDashboardSidebar();
  // const timePeriod = useMeridiem();
  const { title, setTitle } = useDashboardPageTitle();
  // const { user } = useUser();
  // const auth = useAuthActions();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    setTitle("DASHBOARD");
  }, []);

  return (
    <>
      <Container className={` border-b-[1px] border-brand-50  py-1 h-[4.5rem] sticky top-0 bg-white z-10 ${className}`}>
        <div className="flex justify-between items-center mx-8 xl:mx-14 pt-1">
          <div className="flex gap-x-4 items-center">
            <div className="xl:hidden">
              {fileManagerSidebar.isCollapsed ? (
                <GoSidebarCollapse
                  className="h-8 w-8"
                  onClick={() => {
                    fileManagerSidebar.onOpen();
                  }}
                />
              ) : (
                <GoSidebarExpand
                  className="h-8 w-8"
                  onClick={() => {
                    fileManagerSidebar.onCollapse();
                  }}
                />
              )}
            </div>
            {/* <h4 className="flex gap-2 text-xl font-semibold justify-center items-center text-brand-500 pt-1">
              <span className="text-2xl">{title}</span>
            </h4> */}
          </div>

          <div className="flex items-center">
            <Button variant="ghost" className="flex items-center justify-center gap-1" onClick={() => navigate("/")}>
              <GoLinkExternal className="relative bottom-[2px]" /> <span className="hidden">Home</span>
            </Button>

            {/* <span className="dark:text-zinc-400">{timePeriod}!</span> */}
            <Button variant="ghost" className="flex items-center justify-center gap-1">
              <FaRegQuestionCircle className="relative bottom-[2px]" /> <span className="hidden">Docs</span>
            </Button>
            <Button variant="ghost" className="flex items-center justify-center gap-1">
              <RiLogoutBoxLine className="relative bottom-[2px]" /> <span className="hidden">Sign Out</span>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
