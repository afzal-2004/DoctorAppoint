/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AppContext } from "../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../public/contstant";
import { toast } from "react-toastify";
export const MyAppointments = () => {
  const [Cancel, setCancel] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const { Time, Date, token, setTime, setDate } = useContext(AppContext);

  const [Appointedid, setAppointedid] = useState([]);
  const [AppointedDoc, setAppointedDoc] = useState([]);
  console.log("This is m current Doctor Appointed id ", Appointedid);
  console.log("This is My Current Appointed dpoctor", AppointedDoc.length);
  const AccesAppointedDoctor = () => {
    axios
      .get(`${Backend_Url}/AccessAppointedDoctor`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((e) => {
        if (e.data) {
          setAppointedid(e.data.Doctor);
          setTime(e.data.appointedTime);
          setDate(e.data.Date);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getAppointedDoctorlist = () => {
    axios.get(`${Backend_Url}/getDoctorlist`).then((res) => {
      const Doctordata = res.data;
      const Doctors = Doctordata?.filter((doc) =>
        Appointedid.includes(doc._id)
      );
      setAppointedDoc(Doctors);
    });
  };

  useEffect(() => {
    AccesAppointedDoctor();
    getAppointedDoctorlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Appointedid, Cancel]);

  return (
    <>
      <div className={` mt-[8vh]  ${Cancel && " relative "}`}>
        {AppointedDoc.length === 0 ? (
          <h1 className=" text-[25px] font-bold text-center">
            No Doctor Appointed{" "}
          </h1>
        ) : (
          <>
            {AppointedDoc.map((doctor, i) => (
              <div key={i} className="   sm:flex">
                <div className="  mt-[3vh] sm:m-[3vh]  sm:flex  gap-3 border   w-full  border-slate-400 p-2 rounded-md">
                  <img
                    src={`${doctor.avtar}`}
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

                      <span className="ml-2">{`${doctor.appointmentTime[Time]}`}</span>

                      <p>Fees:</p>
                      <span>{doctor.doctorFees}rs</span>
                    </div>
                    <div className="  mt-[5vh] sm:mt-0 flex   sm:flex-col items-center  justify-center sm:justify-end gap-5">
                      <button
                        className=" border border-slate-500 px-3 py-2 w-[150px]"
                        onClick={() => {
                          setCancel(!Cancel);
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
        )}
      </div>

      {Cancel && (
        <CancelPopup
          setCancel={setCancel}
          Cancel={Cancel}
          Appointedid={Appointedid}
          token={token}
          setAppointedid={setAppointedid}
          setAppointedDoc={setAppointedDoc}
        />
      )}
    </>
  );
};

const CancelPopup = ({ setCancel, Appointedid, token, setAppointedid }) => {
  const deleteteAppointedDoctor = (id) => {
    axios
      .delete(`${Backend_Url}/DeletedAppointedDoctor/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((e) => {
        console.log(e);
        setCancel(false);
        setAppointedid([]);
        if (e.status === 201) {
          toast.success(`${e.data.message}`, {
            autoClose: 2000,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className=" bg-black  text-white  w-[80%]  m-auto  sm:w-[400px]  absolute  top-[50%]   right-[10%] sm:top-[20%]  sm:right-[40%] p-4  sm:p-10 rounded-lg z-50 flex flex-col justify-center  items-center ">
        <h1>Are you Sure !! Cancel Appointment</h1>
        <div>
          <button
            className=" bg-red-400 px-3 py-1 rounded-md m-4"
            onClick={() => {
              deleteteAppointedDoctor(Appointedid);
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
