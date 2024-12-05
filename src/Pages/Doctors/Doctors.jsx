/* eslint-disable react/prop-types */
import { DoctorCard } from "../../Components/DoctorCard";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import { Backend_Url } from "../../../public/contstant";
export const Doctors = ({ cancel }) => {
  const { Doctorcategory, Doctordata, setDoctordata } = useContext(AppContext);

  useEffect(() => {
    if (Doctorcategory === "All") {
      axios.get(`${Backend_Url}/getDoctorlist`).then((res) => {
        setDoctordata(res.data);
      });
    } else {
      axios.get(`${Backend_Url}/getDoctorlist`).then((res) => {
        const Doctors = res.data;

        const filterd = Doctors.filter((item) =>
          item.speciality.toLowerCase().includes(Doctorcategory.toLowerCase())
        );

        setDoctordata(filterd);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Doctorcategory]);

  return (
    <>
      <main className="  gap-4 grid   grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 sm:gap-6   p-10   justify-center">
        {Doctordata.map((data, i) => (
          <div
            key={i}
            className="flex flex-col  items-center rounded-lg  mt-3 border border-slate-200"
          >
            <DoctorCard data={data} cancel={cancel} Doctorid={data._id} />
          </div>
        ))}
      </main>
    </>
  );
};
