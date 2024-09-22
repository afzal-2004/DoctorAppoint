/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState } from "react";

export const ContextProvider = ({ children }) => {
  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState("");
  const [day, setday] = useState(null);
  const value = {
    Doctor,
    RelatedDoctor,
    setRelatedDoctor,
    setDoctor,
    day,
    setday,
    Time,
    setTime,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
