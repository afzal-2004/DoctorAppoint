import axios from "axios";
import { useState, useEffect } from "react";
import { Backend_Url } from "../../../public/contstant";

export const AdminHome = () => {
  const [length, setlength] = useState([]);

  const AcessDoctorData = () => {
    axios
      .get(`${Backend_Url}/getDoctorlist`)
      .then((e) => {
        setlength(e.data.length);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    AcessDoctorData();
  }, []);

  const TotalDoctor = [
    {
      image: "🧑‍⚕️",
      Active: length,
      text: "Doctor",
    },
    {
      image: "📒",
      Active: "7",
      text: "Appointments",
    },
    {
      image: "🤷‍♂️",
      Active: "10",
      text: "Patients",
    },
  ];

  return (
    <>
      <div className=" flex flex-wrap  justify-between   gap-y-5">
        {TotalDoctor.map((data, i) => (
          <div
            key={i}
            className=" bg-white p-2 min-w-[250px] h-auto flex   gap-x-3 items-center  rounded-md "
          >
            <p className=" bg-blue-100 p-1 rounded-lg text-[40px]">
              {data.image}
            </p>
            <p className="flex flex-col">
              <span className="  text-[20px] font-bold">{data.Active}</span>
              <span className="text-gray-400">{data.text}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
