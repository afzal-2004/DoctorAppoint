/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState, useEffect } from "react";

export const ContextProvider = ({ children }) => {
  const [Doctor, setDoctor] = useState([]);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);
  const [Time, setTime] = useState("");
  const [day, setday] = useState(null);
  const [Login, setLogin] = useState(true);
  const [data, setdata] = useState({
    emailOrMobile: "moa44468@gmail.com",
    Password: "12345678",
  });
  const [Doctorcategory, setDoctorcategory] = useState("All");
  console.log("Category Of The Particulear doctor", Doctorcategory);
  useEffect(() => {
    setDoctorcategory("All");
  }, []);

  const [Registerdata, setRegisterdata] = useState({
    name: "Afzal",
    email: "moa44468@gmail.com",
    Mobilenumner: "1234567890",
    Password: "",
    profilePicture: "",
    Address: "123456777",
    Gender: "male",
    DOB: "10/17/003",
  });

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
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
