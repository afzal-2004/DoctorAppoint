/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";

export const ContextProvider = ({ children }) => {
  const [Opennav, setOpenNav] = useState(true);

  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState("2");
  const [day, setday] = useState("4");
  const [Login, setLogin] = useState(true);
  const [AppointmentsDoctorsid, setAppointmentsDoctorsid] = useState([]);

  const [NextSevenBookingDate, setNextSevenBookingDate] = useState([]);

  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [data, setdata] = useState({
    emailOrMobile: "moa4468@gmail.com",
    Password: "12345678",
  });
  const [Registerdata, setRegisterdata] = useState({
    name: "Afzal",
    email: "Khan",
    Mobilenumner: "900",
    Password: "123",
    profilePicture: "",
    Address: "gdgd",
    Gender: "male",
    DOB: "10.1100",
  });

  useEffect(() => {
    setDoctorcategory("");
  }, []);
  const addDoctorAppointment = (doctorId) => {
    setAppointmentsDoctorsid((prevAppointments) => [
      ...prevAppointments,
      doctorId,
    ]);
  };

  const value = {
    Opennav,
    setOpenNav,
    Doctor,
    RelatedDoctor,
    setRelatedDoctor,
    setDoctor,
    day,
    setday,
    Time,
    setTime,
    data,
    setdata,
    Registerdata,
    setRegisterdata,
    Login,
    setLogin,
    Doctorcategory,
    setDoctorcategory,
    AppointmentsDoctorsid,
    setAppointmentsDoctorsid,
    addDoctorAppointment,
    NextSevenBookingDate,
    setNextSevenBookingDate,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
