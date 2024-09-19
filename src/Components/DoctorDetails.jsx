/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
export const DoctorDetails = () => {
  const date = new Date();

  const [days, setdays] = useState([]);
  const [Doctor, setDoctor] = useState([]);
  const [bg, setbg] = useState(0);
  const Day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const nextSevenDays = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + i);

      const dayName = Day[nextDate.getDay()];
      const dayDate = nextDate.getDate();

      nextSevenDays.push({ dayName, dayDate });
    }

    setdays(nextSevenDays);
  }, []);

  const { id } = useParams();
  useEffect(() => {
    axios.get("/Doctor.json").then((res) => {
      const Doctordata = res.data;
      const DoctorDetail = Doctordata?.find((doc) => doc._id === id);

      setDoctor(DoctorDetail);
    });
  }, [id]);
  return (
    <>
      <section className="mt-[5vh] min-h-[100vh] ">
        <main className="sm:flex gap-10  p-4  xl:h-[300px]">
          <div className=" bg-blue-500 min-w-[190px] rounded-xl p-0">
            <img
              src={`${Doctor?.image}`}
              alt="Doctorimage"
              className="w-full   h-full  object-cover   "
            />
          </div>
          <div>
            <div className="border   border-slate-300 p-4 rounded-lg mt-[5vh] sm:mt-0 ">
              <h1>{Doctor.name}</h1>
              <ul className="flex  ">
                <li className="p-1 font-bold text-red-600">{Doctor.degree}</li>
                <li className="p-1">{Doctor.speciality}</li>
                <li className="border border-slate-500 rounded-3xl py-1 px-2">
                  {Doctor.experience} exp
                </li>
              </ul>

              <span className="flex  items-center gap-3 ">
                <FaCircleExclamation className="text-slate-500" />
                About
              </span>
              <p className="text-slate-400  xl:max-w-[70%] xl:text-[17px]">
                {Doctor.about}
              </p>
              <p className="font-semibold flex gap-2">
                Doctor Fees :<span>{Doctor.fees}$</span>
              </p>
            </div>
            <div className="mt-[5vh]">
              <h1 className="font-semibold">Booking Slots</h1>
              <div className="flex gap-4 mt-5  m-5">
                {days.map((dayObj, i) => (
                  <p
                    key={i}
                    className={` border border-slate-400 max-w-[50px]  rounded-full flex flex-col  p-4  items-center  cursor-pointer justify-center ${
                      bg === i ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => {
                      setbg(i);
                    }}
                  >
                    <span>{dayObj.dayName}</span>

                    <span>{dayObj.dayDate}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer></footer>
      </section>
    </>
  );
};
