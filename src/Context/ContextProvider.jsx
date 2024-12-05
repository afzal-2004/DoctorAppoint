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
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState(0);
  const [Date, setDate] = useState("");
  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [Profile, setProfile] = useState([]);
  const [Doctordata, setDoctordata] = useState([]);

  const [data, setdata] = useState({
    emailOrMobile: "",
    //moa44468@gmail.com
    Password: "",
    // 123456
  });

  useEffect(() => {
    if (token) {
      ProfileData();
    }
  }, [token]);

  const ProfileData = () => {
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
  };

  useEffect(() => {
    setDoctorcategory("");
  }, []);

  const addDoctorAppointment = (doctorId) => {
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
    RelatedDoctor,
    setRelatedDoctor,
    Time,
    setTime,
    Date,
    setDate,
    data,
    setdata,
    Profile,
    setProfile,
    Doctorcategory,
    setDoctorcategory,
    addDoctorAppointment,
    ProfileData,
    Doctordata,
    setDoctordata,
    token,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
