/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Backend_Url } from "../../public/contstant";
import Cookies from "js-cookie";
export const ContextProvider = ({ children }) => {
  const token = Cookies.get("token");
  const [Opennav, setOpenNav] = useState(false);
  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState(0);
  const [Date, setDate] = useState("");

  const [Login, setLogin] = useState(false);
  const [AppointmentsDoctorsid, setAppointmentsDoctorsid] = useState([]);
  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [Profile, setProfile] = useState([]);

  const [data, setdata] = useState({
    emailOrMobile: "moa44468@gmail.com",
    Password: "123456",
  });

  useEffect(() => {
    // Check for token in cookies on component mount
    if (token) {
      axios
        .get(`${Backend_Url}/Userprofile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setProfile(response.data?.FindUser);
        })
        .catch((error) => {
          console.log("Error fetching profile:", error);
        });
    }
  }, []);

  // const ProfileData = () => {
  //   console.log("This is Profile data ", Profile);
  //   axios
  //     .get(`${Backend_Url}/Userprofile`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((e) => {
  //       console.log(e);
  //     })
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    setDoctorcategory("");
  }, []);

  const addDoctorAppointment = (doctorId) => {
    setAppointmentsDoctorsid((prevAppointments) => [
      ...prevAppointments,
      doctorId,
    ]);
    axios
      .post(
        `${Backend_Url}/AppointedDoctor/${doctorId}`,
        {
          date: Date,
          appointedTime: Time,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((e) => {
        console.log(e);
        toast.success(e.data?.message);
      })
      .catch((e) => console.log(e));
  };

  const value = {
    Opennav,
    setOpenNav,
    Doctor,
    RelatedDoctor,
    setRelatedDoctor,
    setDoctor,
    Time,
    setTime,
    Date,
    setDate,
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
    // ProfileData,
    token,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
