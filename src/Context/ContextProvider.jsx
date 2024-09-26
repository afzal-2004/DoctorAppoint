/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";

export const ContextProvider = ({ children }) => {
  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState("");
  const [day, setday] = useState(null);
  const [Login, setLogin] = useState(false);
  const [AppointmentsDoctorsid, setAppointmentsDoctorsid] = useState([""]);

  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [data, setdata] = useState({
    emailOrMobile: "",
    Password: "",
  });
  const [Registerdata, setRegisterdata] = useState({
    name: "",
    email: "",
    Mobilenumner: "",
    Password: "",
    profilePicture: "",
    Address: "",
    Gender: "",
    DOB: "",
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
