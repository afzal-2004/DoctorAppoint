/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Backend_Url } from "../../public/contstant";
import Cookies from "js-cookie";
export const ContextProvider = ({ children }) => {
  const Token = Cookies.get("token");

  const [Opennav, setOpenNav] = useState(false);
  const [Doctor, setDoctor] = useState([]);

  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState(null);
  const [day, setday] = useState(null);
  const [Login, setLogin] = useState(false);
  const [AppointmentsDoctorsid, setAppointmentsDoctorsid] = useState([]);
  const [NextSevenBookingDate, setNextSevenBookingDate] = useState([]);
  const [Doctorcategory, setDoctorcategory] = useState("");
  const [Profile, setProfile] = useState([]);
  console.log(" Prifile data ", Profile);

  const [data, setdata] = useState({
    emailOrMobile: "moa44468@gmail.com",
    Password: "123456",
  });

  const ProfileData = () => {
    console.log("This is Profile data ", Profile);
    axios
      .get(`${Backend_Url}/Userprofile`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

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
    Profile,
    setProfile,
    Login,
    setLogin,
    Doctorcategory,
    setDoctorcategory,
    AppointmentsDoctorsid,
    setAppointmentsDoctorsid,
    addDoctorAppointment,
    NextSevenBookingDate,
    setNextSevenBookingDate,
    ProfileData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
