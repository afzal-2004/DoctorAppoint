/* eslint-disable react/prop-types */
import { AppContext } from "./Contextcreater";
import { useEffect, useState } from "react";
import axios from "axios";
const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "718976a7d5msh6c867fee2de9f14p136f58jsn816a979210a5",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

// let url = "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10";

export const ContextProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  const [Exercies, setExercies] = useState([]);
  const [SearchingPart, setSearchingPart] = useState("back");

  // let url =
  //   search === ""
  //     ? `https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10`
  //     : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${SearchingPart}?offset=0&limit=10`;

  useEffect(() => {
    try {
      axios
        .request(
          "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10",
          options
        )
        .then((res) => {
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
