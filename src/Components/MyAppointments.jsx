import { AppContext } from "../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export const MyAppointments = () => {
  const { AppointmentsDoctorsid, NextSevenBookingDate, Time, day } =
    useContext(AppContext);
  console.log(AppointmentsDoctorsid);
  const [AppointedDoc, setAppointedDoc] = useState([]);
  console.log("Appointed Doctor data is : ", AppointedDoc);
  useEffect(() => {
    axios.get("/Doctor.json").then((res) => {
      console.log(res.data);
      const Doctordata = res.data;
      const Doctors = Doctordata?.filter((doc) =>
        AppointmentsDoctorsid.includes(doc._id)
      );
      setAppointedDoc(Doctors);
    });
  }, [AppointmentsDoctorsid]);

  return (
    <div className=" mt-[8vh]">
      <h1 className=" text-[25px] font-bold text-center">My appointments </h1>
      {AppointedDoc.map((doctor, i) => (
        <div key={i} className="   sm:flex">
          <div className="  mt-[3vh] sm:m-[3vh]  sm:flex  gap-3 border   w-full  border-slate-400 p-2 rounded-md">
            <img
              src={`${doctor.image}`}
              alt="Doctorimage"
              className="   object-cover  bg-blue-500 sm:max-w-[200px]   rounded-xl p-0  "
            />

            <div className="  sm:flex justify-between   w-full">
              <div className=" mt-[5vh] sm:mt-[0vh]">
                <h1 className=" text-[20px] font-semibold text-red-500">
                  {doctor.name}
                </h1>
                <span className=" text-[17px] font-light">
                  {doctor.speciality}
                </span>
                <p className=" text-[15px] font-bold">Address :</p>
                <p className=" text-[18px font-semibold]">
                  <span>{doctor.address?.line1}</span>
                  <span>{doctor.address?.line2}</span>
                </p>

                <p>Date & Time</p>
                <span>
                  {`${NextSevenBookingDate[day]?.dayName} ${NextSevenBookingDate[day]?.dayDate}`}{" "}
                  | {doctor.apointmentTime[Time]}
                </span>
              </div>
              <div className="  mt-[5vh] sm:mt-0 flex   sm:flex-col items-center  justify-center sm:justify-end gap-5">
                <button className=" border border-slate-500 px-3 py-2 w-[150px]">
                  Cancel
                </button>
                <button className=" border border-slate-500 px-3 py-2 w-[150px] bg-blue-500 text-white ">
                  Pay Here ..
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
