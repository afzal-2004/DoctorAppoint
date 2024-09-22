/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState("");
  const [day, setday] = useState(null);
  const [data, setdata] = useState({
    emailOrMobile: "",
    Password: "",
  });
  console.log(" My form login data is ", data);
  console.log(Object.keys(data).every((value) => value === ""));
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
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
