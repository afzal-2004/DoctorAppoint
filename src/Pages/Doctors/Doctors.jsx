/* eslint-disable react/prop-types */
import { DoctorCard } from "../../Components/DoctorCard";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../Context/AppContext";

import Loader from "../../Components/Loader";

export const Doctors = ({ cancel }) => {
  const { Doctordata, Doctorcategory } = useContext(AppContext);
  const [FilterData, setFilterData] = useState([]);
  useEffect(() => {
    if (Doctorcategory !== "") {
      const filterData = Doctordata.filter(
        (Data) => Data.speciality.toLowerCase() === Doctorcategory.toLowerCase()
      );
      setFilterData(filterData);
    } else {
      setFilterData(Doctordata);
    }

    // console.log("This is my filterd data", filterData);
  }, [Doctorcategory]);

  return (
    <>
      <main className="  gap-4 grid   grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 sm:gap-6   p-10   justify-center">
        {Doctordata.length === 0 ? <Loader /> : ""}
        {FilterData.map((data, i) => (
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
