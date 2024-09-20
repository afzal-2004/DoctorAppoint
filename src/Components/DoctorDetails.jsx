/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircleExclamation, FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import { DoctorCard } from "./DoctorCard";
import { Link } from "react-router-dom";
export const DoctorDetails = () => {
  const { id } = useParams();
  const date = new Date();
  const [days, setdays] = useState([]);
  const [Doctor, setDoctor] = useState({});
  console.log(Doctor.speciality);
  const [day, setday] = useState(null);
  const [Time, setTime] = useState(null);
  const [RelatedDoctor, setRelatedDoctor] = useState([]);

  const Day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  //   Filtering data is based on you id
  useEffect(() => {
    axios.get("/Doctor.json").then((res) => {
      const Doctordata = res.data;
      const DoctorDetail = Doctordata?.find((doc) => doc._id === id);
      console.log("Speciality of the doctor  is ", DoctorDetail.speciality);
      const Specility = DoctorDetail.speciality;
      const filterd = Doctordata.filter((item) =>
        item.speciality.toLowerCase().includes(Specility.toLowerCase())
      );
      setRelatedDoctor(filterd);
      setDoctor(DoctorDetail);
    });
  }, [id]);
  // For Simple    to  Show next Seven days for Booking Doctor
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
  //  Handling Booking Funtion
  const handleBookingStatus = () => {
    toast.success("Book Doctor");
  };
  //  Calling related Doctor from your Api

  return (
    <>
      <section className="mt-[5vh]  ">
        <main className="md:flex gap-10  p-4  ">
          <div className=" ">
            <img
              src={`${Doctor?.image}`}
              alt="Doctorimage"
              className="w-full    object-cover  bg-blue-500 sm:min-w-[300px]   rounded-xl p-0  "
            />
          </div>
          <div>
            <div className="border   border-slate-300 p-4 rounded-lg mt-[5vh] sm:mt-0 ">
              <h1>{Doctor.name}</h1>
              <ul className="flex  gap-2 ">
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
              <div className="flex  flex-wrap gap-4 md:gap-7  mt-5  m-5">
                {days.map((dayObj, i) => (
                  <p
                    key={i}
                    className={` border border-slate-400 max-w-[50px]  rounded-full flex flex-col  p-4  items-center  cursor-pointer justify-center ${
                      day === i ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => {
                      setday(i);
                      console.log(
                        "User Select This date for doctor meetUp :",
                        dayObj
                      );
                    }}
                  >
                    <span>{dayObj.dayName}</span>

                    <span>{dayObj.dayDate}</span>
                  </p>
                ))}
              </div>
              <div className=" flex  flex-wrap gap-4 ">
                {Doctor.apointmentTime?.map((time, i) => (
                  <div
                    className={`border border-gray-400 py-2   px-3 rounded-2xl sm:min-w-[150px] min-w-[100px] text-center ${
                      Time === i && "bg-blue-500 text-white"
                    }`}
                    key={i}
                  >
                    <span
                      onClick={() => {
                        setTime(i);
                        console.log(
                          " User Select This  time for doctor meeting ",
                          time
                        );
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <button
                  className=" m-[5vh] border bg-blue-500 rounded-3xl text-white p-4   sm:text-[18px] text-[15px] gap-3 flex  items-center"
                  onClick={() => {
                    handleBookingStatus();
                  }}
                >
                  {" "}
                  Book an appointment
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="m-[5vh]">
          <h1 className=" text-center font-semibold  sm:text-[25px] text-[20px] m-[3vh]">
            {" "}
            Related Doctors
          </h1>
          <div
            className="flex flex-wrap  gap-6 justify-center
           "
          >
            {RelatedDoctor.map((data, i) => (
              <div key={i} className="flex max-w-[25]">
                <Link to={`/allDoctors/${data._id}`}>
                  <DoctorCard data={data} />
                </Link>
              </div>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
};
