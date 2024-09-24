import { DoctorCard } from "../../Components/DoctorCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
export const Doctors = () => {
  const [Doctordata, setDoctordata] = useState([]);
  console.log("Doctor data", Doctordata);

  const { Doctorcategory } = useContext(AppContext);
  console.log("Category Inside The Doctor Card ", Doctorcategory);
  useEffect(() => {
    if (Doctorcategory === "All") {
      axios.get("/Doctor.json").then((res) => {
        setDoctordata(res.data);
      });
    } else {
      axios.get("/Doctor.json").then((res) => {
        console.log(res.data);
        const Doctors = res.data;
        console.log("data For Particulear Doctors", Doctors);
        const filterd = Doctors.filter((item) =>
          item.speciality.toLowerCase().includes(Doctorcategory.toLowerCase())
        );

        setDoctordata(filterd);
      });
    }
  }, [Doctorcategory]);
  return (
    <>
      <main className="  gap-4 grid   grid-cols-2 md:grid-cols-3  sm:gap-6   p-10   justify-center">
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
