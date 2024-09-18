import { doctors } from "../../assets/frontend/assets.js";
import { DoctorCard } from "../../Components/DoctorCard";

export const Doctors = () => {
  return (
    <>
      <main className="  gap-4 grid   grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-6   p-10   justify-center">
        {doctors.map((data, i) => (
          <div
            key={i}
            className="flex flex-col  items-center rounded-lg  mt-3 border border-slate-200"
          >
            <DoctorCard data={data} />
          </div>
        ))}
      </main>
    </>
  );
};
