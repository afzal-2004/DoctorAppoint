/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";

export const ContextProvider = ({ children }) => {
  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState("");
  const [day, setday] = useState(null);
  const [Login, setLogin] = useState(true);
  const [AppointmentsDoctorsid, setAppointmentsDoctorsid] = useState([]);

  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [data, setdata] = useState({
    emailOrMobile: "moa44468@gmail",
    Password: "1234567",
  });
  const [Registerdata, setRegisterdata] = useState({
    name: "Afzal",
    email: "moa44468@gmail.com",
    Mobilenumner: "9520752384",
    Password: "1234567",
    profilePicture: "khan",
    Address: " Street 1   xyzvillage  xyz city xyz State , India",
    Gender: "Male",
    DOB: "03/07/2005",
  });

  useEffect(() => {
    setDoctorcategory("All");
  }, []);
  const addDoctorAppointment = (doctorId) => {
    setAppointmentsDoctorsid((prevAppointments) => [
      ...prevAppointments,
      doctorId,
    ]);
  };

  const value = {
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
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
