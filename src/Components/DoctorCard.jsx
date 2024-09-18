/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";

export const DoctorCard = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="" className=" bg-blue-50 rounded-lg  " />

      <div className=" flex flex-col p-3">
        <p className="flex items-center text-green-300 ">
          <GoDotFill />
          Avalible
        </p>
        <h2>{data.name}</h2>
        <p>{data.speciality}</p>
      </div>
    </div>
  );
};
