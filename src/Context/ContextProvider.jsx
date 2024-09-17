/* eslint-disable react/prop-types */
import { AppContext } from "./Contextcreater";
import { useEffect, useState } from "react";
import axios from "axios";
const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "f6a302ee71msh2bf73cfb8a812e7p140c7fjsn95d3727117d4",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

// let url = "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10";

export const ContextProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  const [Exercies, setExercies] = useState([]);
  const [SearchingPart, setSearchingPart] = useState("back");

  let url =
    search === ""
      ? `https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=100`
      : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${SearchingPart}`;
  console.log("Calling Url is :", url);
  useEffect(() => {
    try {
      axios.request(url, options).then((res) => {
        console.log(res.data);
        setExercies(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [SearchingPart]);

  const value = {
    Exercies,
    search,
    setsearch,
    setSearchingPart,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
