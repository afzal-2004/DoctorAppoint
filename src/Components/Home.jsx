import { FaArrowRight } from "react-icons/fa";
import "./Components.css";
export const Home = () => {
  return (
    <div className="text-center  w-full mt-[5vh]  flex flex-col justify-center items-center">
      <h1 className="text-center   text-[20px] sm:text-[25px] md:text-[30px] xl:text-[36px] font-bold">
        <span className="text-red-500">Fitness Club</span>
        <br />
        Sweat, Smile and Repeat
      </h1>
      <p className=" utilsStyle ">Check Out The Most Effective exercises</p>
      <button className="p-3  bg-red-400 text-white rounded-md flex   justify-between items-center gap-3 hover:bg-red-300 cursor-pointer">
        Explore Excercises <FaArrowRight />
      </button>
    </div>
  );
};
