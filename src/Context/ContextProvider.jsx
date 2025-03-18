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
  const [login, setlogin] = useState(false);
  useEffect(() => {
    axios.get(`/Doctor.json`).then((e) => {
      setDoctordata(e.data);
    });
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
    Profile,
    setProfile,
    Doctorcategory,
    setDoctorcategory,
    Doctordata,
    setDoctordata,
    login,
    setlogin,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
