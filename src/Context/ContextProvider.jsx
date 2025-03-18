/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";
import axios from "axios";

export const ContextProvider = ({ children }) => {
  const [Opennav, setOpenNav] = useState(false);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState(0);
  const [Date, setDate] = useState("");
  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [Profile, setProfile] = useState([]);
  const [Doctordata, setDoctordata] = useState([]);

  useEffect(() => {
    axios.get(`/public/Doctor.json`).then((e) => {
      console.log(e.data);
      setDoctordata(e.data);
    });
  }, []);

  const [data, setdata] = useState({
    emailOrMobile: "",
    //moa44468@gmail.com
    Password: "",
    // 123456
  });

  useEffect(() => {
    setDoctorcategory("");
  }, []);

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
    Doctordata,
    setDoctordata,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
