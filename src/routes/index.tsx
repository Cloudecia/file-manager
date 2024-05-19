import { Route, Routes } from "react-router-dom";
import Home from "../pages/fileManager/Home";
import DashboardLayout from "../components/layouts/DashboardLayout";
import FourHunderdAndFour from "@/pages/errors/FourHunderdAndFour";
const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<FourHunderdAndFour />} />
      </Route>
      <Route path="*" element={<FourHunderdAndFour />} />
    </Routes>
  );
};

export default PageRoutes;
