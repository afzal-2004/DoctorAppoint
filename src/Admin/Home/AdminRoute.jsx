import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Sidebar";
import { AdminHome } from "../Components/AdminHome";
export const AdminRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminHome />} />
      </Routes>
    </>
  );
};
