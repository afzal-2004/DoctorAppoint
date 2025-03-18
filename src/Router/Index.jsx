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
import { AppContext } from "../Context/AppContext";
import { MyProfile } from "../Components/UserProfile";
import { MyAppointments } from "../Components/MyAppointments";
import { useContext } from "react";
/* ALL ADMIN PABEL REALTED ROITES IS DEFINED HERE*/

export const Index = () => {
  const { login } = useContext(AppContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainAppLayoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/allDoctors/:id" element={<DoctorDetails />} />

            <Route
              path="/userProfile"
              element={login ? <MyProfile /> : <Home />}
            />
            <Route
              path="/Appointments"
              element={login ? <MyAppointments /> : <Home />}
            />
            <Route path="/allDoctors" element={<DoctorOutlet />}>
              <Route path="/allDoctors" element={<Doctors />} />
            </Route>
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
