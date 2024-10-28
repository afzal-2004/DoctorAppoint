import { DoctorCard } from "../../Components/DoctorCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { Backend_Url } from "../../../public/contstant";
export const Doctors = () => {
  const [Doctordata, setDoctordata] = useState([]);
  console.log("My Doctor list ", Doctordata);

  const { Doctorcategory } = useContext(AppContext);

  useEffect(() => {
    if (Doctorcategory === "All") {
      axios.get(`${Backend_Url}/getDoctorlist`).then((res) => {
        setDoctordata(res.data);
        console.log("This is My Doctor", res.data);
      });
    } else {
      axios.get("/Doctor.json").then((res) => {
        const Doctors = res.data;

        const filterd = Doctors.filter((item) =>
          item.speciality.toLowerCase().includes(Doctorcategory.toLowerCase())
        );

        setDoctordata(filterd);
      });
    }
  }, [Doctorcategory]);
  return (
    <>
      <main className="  gap-4 grid   grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 sm:gap-6   p-10   justify-center">
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
