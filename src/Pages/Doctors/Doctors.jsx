import { DoctorCard } from "../../Components/DoctorCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Doctors = () => {
  const [Doctordata, setDoctordata] = useState([]);
  useEffect(() => {
    axios.get("/Doctor.json").then((res) => {
      console.log(res.data);
      setDoctordata(res.data);
    });
  }, []);
  return (
    <>
      <main className="  gap-4 grid   grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-6   p-10   justify-center">
        {Doctordata.map((data, i) => (
          <div
            key={i}
            className="flex flex-col  items-center rounded-lg  mt-3 border border-slate-200"
          >
            <Link to={`/allDoctors/${data._id}`}>
              <DoctorCard data={data} />
            </Link>
          </div>
        ))}
      </main>
    </>
  );
};
