import { BodyPart } from "../../Components/BodyPart";
import { LandingPage } from "../../Components/LandingPage";
import { Navbar } from "../../Components/Navbar";
import { SearchExercies } from "../../Components/SearchExercies";
export const Home = () => {
  return (
    <>
      <div
        className=" sm:flex md:flex-row 
      w-full justify-between "
      >
        <div className="p-10 sm:w-[70%]">
          <Navbar />
          <LandingPage />
        </div>
        <div className=" sm:flex hidden">
          <img
            src="/BodyBuilder.jpeg"
            alt=""
            className=" rounded   rounded-bl-[100px]"
          />
        </div>
      </div>
      <SearchExercies />

      <BodyPart />
    </>
  );
};
