import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import CopyrightFooter from "../sections/CopyrightFooter";

function UserDashboardLayout() {
  return (
    <>
      <div className="flex relative min-h-screen">
        <Sidebar />

        <div className={`flex flex-col grow relative`}>
          <DashboardHeader />

          <Outlet />

          <CopyrightFooter className="mt-auto" />
        </div>
      </div>
    </>
  );
}

export default UserDashboardLayout;
