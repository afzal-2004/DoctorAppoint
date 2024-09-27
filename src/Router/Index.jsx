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
import { PatinentDetails } from "../Components/PatinentDetails";
import { MyProfile } from "../Components/UserProfile";
import { MyAppointments } from "../Components/MyAppointments";

export const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allDoctors/:id" element={<DoctorDetails />} />
          <Route path="/patientDetails/:id" element={<PatinentDetails />} />
          <Route path="/userProfile" element={<MyProfile />} />
          <Route path="/Appointments" element={<MyAppointments />} />
          <Route path="/allDoctors" element={<DoctorOutlet />}>
            <Route path="/allDoctors" element={<Doctors />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
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
