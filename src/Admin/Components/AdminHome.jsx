/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Backend_Url } from "../../../public/contstant";
import { DoctorList } from "./DoctorList";

export const AdminHome = () => {
  const [length, setlength] = useState([]);
  const [Appointed, setAppointed] = useState(0);
  const [User, setUser] = useState(0);
  const [adminHomenav, setadminHomenav] = useState(0);

  const [Userdata, setUserdata] = useState([]);
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
  const AppointedDoctor = () => {
    axios
      .get(`${Backend_Url}/AccessTotalAppointed`)
      .then((e) => {
        setAppointed(e.data.length);
        console.log(e.data);
      })
      .catch((e) => console.log(e));
  };
  const TotalUser = () => {
    axios
      .get(`${Backend_Url}/TotalActivePatient`)
      .then((e) => {
        setUser(e.data.length);
        setUserdata(e.data);
        // console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    AcessDoctorData();
    AppointedDoctor();
    TotalUser();
  }, []);

  const TotalDoctor = [
    {
      image: "🧑‍⚕️",
      Active: length,
      text: "Doctor",
    },
    {
      image: "📒",
      Active: Appointed,
      text: "Appointments",
    },
    {
      image: "🤷‍♂️",
      Active: User,
      text: " Active User",
    },
  ];

  return (
    <>
      <div className=" flex flex-wrap  justify-between   gap-y-5 m-5 cursor-pointer">
        {TotalDoctor.map((data, i) => (
          <div
            key={i}
            className={` bg-white p-2 min-w-[250px] h-auto flex   gap-x-3 items-center  rounded-md  ${
              adminHomenav === i && " scale-105 shadow-xl "
            }`}
            onClick={() => setadminHomenav(i)}
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
      {adminHomenav === 0 ? (
        <DoctorList />
      ) : adminHomenav === 1 ? (
        <div>Access All of the Appointment Appointed By all Of the Users</div>
      ) : (
        <Activeuser Userdata={Userdata} />
      )}
    </>
  );
};

const Activeuser = ({ Userdata }) => {
  return (
    <>
      {Userdata?.map((data) => (
        <div key={data._id} className="  p-2 border  mt-3 rounded-lg">
          <h2>UserName: {data.name}</h2>
          <h1>Email: {data.email}</h1>
          <h2>Mobile: {data.MobileNumber}</h2>
          <h2>Created: {data.createdAt}</h2>
          <h2>Last Update: {data.updatedAt}</h2>
        </div>
      ))}
    </>
  );
};
