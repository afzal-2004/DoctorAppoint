/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AppContext } from "../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const MyAppointments = () => {
  const [Cancel, setCancel] = useState(false);
  const { Time, Date, Appointmentid } = useContext(AppContext);

  const [AppointedDoc, setAppointedDoc] = useState([]);
  const [Currentid, setCurrentid] = useState([]);
  // console.log("This is Current Items id ", Currentid);

  useEffect(() => {
    axios.get("/Doctor.json").then((e) => {
      const AllDoc = e.data;
      const myTemp = [];
      for (let i = 0; i < Appointmentid.length; i++) {
        const AppointDoc = AllDoc.find(
          (Data) => Data._id.toUpperCase() === Appointmentid[i].toUpperCase()
        );

        if (AppointDoc) {
          myTemp.push(AppointDoc);
        }
        setAppointedDoc(myTemp);
      }
    });
  }, [Appointmentid]);

  return (
    <>
      <div className={` mt-[8vh]  ${Cancel && " relative "}`}>
        {Appointmentid.length === 0 ? (
          <h1 className=" text-[25px] font-bold text-center">
            No Doctor Appointed{" "}
          </h1>
        ) : (
          <></>
        )}
        <>
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
                    <span>{Date}</span>

                    <span className="ml-2">{`${doctor.apointmentTime[Time]}`}</span>

                    <p>Fees:</p>
                    <span>{doctor.fees}₹</span>
                  </div>
                  <div className="  mt-[5vh] sm:mt-0 flex   sm:flex-col items-center  justify-center sm:justify-end gap-5">
                    <button
                      className=" border border-slate-500 px-3 py-2 w-[150px]"
                      onClick={() => {
                        setCancel(!Cancel);
                        setCurrentid(doctor._id);
                      }}
                    >
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
        </>
      </div>

      {Cancel && <CancelPopup setCancel={setCancel} Currentid={Currentid} />}
    </>
  );
};

const CancelPopup = ({ setCancel, Currentid }) => {
  const navigate = useNavigate();

  const { Appointmentid, setAppointmentid } = useContext(AppContext);
  // console.log(
  //   "This is My Appointed Docter & Current Selected  id ",
  //   Appointmentid,
  //   Currentid
  // );

  const deleteteAppointedDoctor = () => {
    const idsAfterDeletion = Appointmentid.filter(
      (data) => data.toUpperCase() !== Currentid.toUpperCase()
    );

    // console.log("These is the inside my db ", idsAfterDeletion);
    setAppointmentid(idsAfterDeletion);
    toast.success("Appointment Cancel ", {
      autoClose: 2000,
    });

    navigate("/");
  };

  return (
    <>
      <div className=" bg-black  text-white  w-[80%]  m-auto  sm:w-[400px]  absolute  top-[50%]   right-[10%] sm:top-[20%]  sm:right-[40%] p-4  sm:p-10 rounded-lg z-50 flex flex-col justify-center  items-center ">
        <h1>Are you Sure !! Cancel Appointment</h1>
        <div>
          <button
            className=" bg-red-400 px-3 py-1 rounded-md m-4"
            onClick={() => {
              deleteteAppointedDoctor(Currentid);
              setCancel(false);
            }}
          >
            Yes
          </button>
          <button
            className=" bg-green-400 px-3 py-1 rounded-md"
            onClick={() => {
              setCancel(false);
            }}
          >
            Cancel{" "}
          </button>
        </div>
      </div>
    </>
  );
};
