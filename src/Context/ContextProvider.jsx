/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";
import axios from "axios";

export const ContextProvider = ({ children }) => {
  const [Opennav, setOpenNav] = useState(false);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState(0);
  const [Date, setDate] = useState(null);
  const [Doctorcategory, setDoctorcategory] = useState("All");
  const [Doctordata, setDoctordata] = useState([]);
  // console.log("These Are All Doctor Present inside the Web", Doctordata);
  const [login, setlogin] = useState(false);
  const [Appointmentid, setAppointmentid] = useState(["doc1"]);
  // console.log("These All Id of My Appointed Doctors", Appointmentid);
  const [Registerdata, setRegisterdata] = useState({
    name: "Afzal",
    email: "moa44468@gmail.com",
    Mobilenumer: "1234567890",
    Password: "1234",
    // name: "",
    // email: "",
    // Mobilenumer: "",
    // Password: "",
  });

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
    Doctorcategory,
    setDoctorcategory,
    Doctordata,
    setDoctordata,
    login,
    setlogin,
    Appointmentid,
    setAppointmentid,
    Registerdata,
    setRegisterdata,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
