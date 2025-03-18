import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const Sidebar = () => {
  const { Doctorcategory, setDoctorcategory } = useContext(AppContext);
  console.log("This is My doctor  ", Doctorcategory);

  return (
    <>
      <div
        className={`   hidden lg:flex  md:m-[2vh] xl:m-[5vh]  cursor-pointer`}
      >
        <ul className="  min-w-[200px] gap-3 rounded-md">
          <li
            className={`p-2 text-center border border-black  ${
              Doctorcategory === "All" && "bg-blue-500 text-slate-100"
            }`}
            onClick={() => {
              setDoctorcategory("All");
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
            Pediatrician
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
        </ul>
      </div>
    </>
  );
};
