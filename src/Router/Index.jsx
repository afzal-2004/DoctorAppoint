import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { Doctors } from "../Pages/Doctors/Doctors";
import { Sidebar } from "../Components/Sidebar";
import { Login, Register } from "../Components/LoginAndRegister";
import { DoctorDetails } from "../Components/DoctorDetails";

import { MyProfile } from "../Components/UserProfile";
import { MyAppointments } from "../Components/MyAppointments";
/* ALL ADMIN PABEL REALTED ROITES IS DEFINED HERE*/
import { AdminNavbar } from "../Admin/Components/Sidebar";
import { AdminAuth } from "../Admin/Components/AdminAuth";

import { AdminSidebar } from "../Admin/Components/Sidebar";
import { AddDoctor } from "../Admin/Components/AddDoctor";
import { DoctorList } from "../Admin/Components/DoctorList";
import { AdminHome } from "../Admin/Components/AdminHome";
export const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* This Route For My Main App */}
          <Route path="/" element={<MainAppLayoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/allDoctors/:id" element={<DoctorDetails />} />

            <Route path="/userProfile" element={<MyProfile />} />
            <Route path="/Appointments" element={<MyAppointments />} />
            <Route path="/allDoctors" element={<DoctorOutlet />}>
              <Route path="/allDoctors" element={<Doctors />} />
            </Route>
          </Route>
          {/* / ADMIN PANEL ROUTES   */}
          <Route path="/admin" element={<AdminAuth />} />
          <Route path="/adminLayout" element={<AdminLayout />}>
            <Route path="/adminLayout" element={<AdminHome />} />
            <Route path="/adminLayout/adddoctor" element={<AddDoctor />} />
            <Route path="/adminLayout/allDoctorList" element={<DoctorList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
const MainAppLayoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const DoctorOutlet = () => {
  return (
    <div className="flex  gap-4  ">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="   border-black sm:border border-r-0 border-l-0 border-b-0 border-t-2  flex flex-col xl:flex-row ">
        <AdminSidebar />
        <div
          className="bg-blue-50  m-auto mt-4 xl:mt-0  p-4 w-[100%]   
        sm:min-w-[80%] md:min-w-[80%]  h-[98vh]    
   "
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
