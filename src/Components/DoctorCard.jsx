/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";
import { MdDelete } from "react-icons/md";
export const DoctorCard = ({ data, cancel }) => {
  return (
    <div className=" relative">
      {cancel && (
        <MdDelete className=" text-black text-[25px] absolute right-3 top-2" />
      )}
      <img
        src={data.avtar}
        alt=""
        className=" bg-blue-50  hover:bg-blue-500 rounded-lg  "
      />

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
