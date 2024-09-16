import { useEffect, useState } from "react";
import axios from "axios";
import { FaDumbbell } from "react-icons/fa";
import "./Components.css";

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "718976a7d5msh6c867fee2de9f14p136f58jsn816a979210a5",
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
