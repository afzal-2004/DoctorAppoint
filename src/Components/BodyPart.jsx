import { useEffect, useState } from "react";
import axios from "axios";
import { FaDumbbell } from "react-icons/fa";
import "./Components.css";

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "f6a302ee71msh2bf73cfb8a812e7p140c7fjsn95d3727117d4",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const BodyPart = () => {
  const [Bodyparts, setBodyparts] = useState([]);

  useEffect(() => {
    try {
      axios
        .request(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          options
        )
        .then((res) => {
          setBodyparts(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [Bodyparts]);
  return (
    <div className=" flex gap-5  overflow-x-scroll   w-full mt-[7vh]   ">
      <div className=" Card   ">
        <FaDumbbell className="text-[50px]" />
        <p className="text-[20px]   font-semibold uppercase">All</p>
      </div>
      {Bodyparts.map((data, i) => (
        <div key={i} className="  Card ">
          <FaDumbbell className="text-[50px]" />
          <p className="text-[20px]  font-semibold uppercase">{data}</p>
        </div>
      ))}
    </div>
  );
};
