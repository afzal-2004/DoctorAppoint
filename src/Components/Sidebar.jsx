import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const Sidebar = () => {
  const { Doctorcategory, setDoctorcategory } = useContext(AppContext);

  return (
    <>
      <div
        className={`   hidden sm:flex  md:m-[2vh] xl:m-[5vh]  cursor-pointer`}
      >
        <ul className="  min-w-[200px] gap-3 rounded-md">
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "" && "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("");
            }}
          >
            All Doctor
          </li>
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "General physician" &&
              "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("General physician");
            }}
          >
            General physician
          </li>
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "Gynecologist" && "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("Gynecologist");
            }}
          >
            Gynecologist
          </li>
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "Dermatologist" && "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("Dermatologist");
            }}
          >
            Dermatologist
          </li>
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "Pediatricians" && "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("Pediatricians");
            }}
          >
            Pediatricians
          </li>
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "Neurologist" && "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("Neurologist");
            }}
          >
            Neurologist
          </li>
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "Gastroenterologist" &&
              "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("Gastroenterologist");
            }}
          >
            Gastroenterologist
          </li>
        </ul>
      </div>
    </>
  );
};
