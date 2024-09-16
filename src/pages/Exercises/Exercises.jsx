import { useContext } from "react";
import { AppContext } from "../../Context/Contextcreater";
import { ExercisesCard } from "../../Components/ExercisesCard";

export const Exercises = () => {
  const { Exercies } = useContext(AppContext);
  return (
    <div className="  mt-[5vh]  flex flex-wrap  justify-between gap-y-[5vh] ">
      {Exercies.map((data, i) => (
        <div
          key={i}
          className="    border  border-slate-300 rounded-lg  bg-white "
        >
          <ExercisesCard data={data} />
        </div>
      ))}
    </div>
  );
};
