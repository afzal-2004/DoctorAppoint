import { AppContext } from "../Context/Contextcreater";
import { useContext } from "react";
export const SearchExercies = () => {
  const { setsearch, search, setSearchingPart } = useContext(AppContext);
  const Onhandlechange = () => {
    setSearchingPart(search);
    setsearch("");
  };

  return (
    <>
      <section className=" mt-[3vh] sm:mt-[5vh] text-center">
        <h3 className="utilsStyle font-medium">
          Awesome Exercise you Should Know
        </h3>
        <div className="  rounded-xl   max-w-[90vw] sm:w-[70vw] m-auto  sm:mt-[5vh] bg-red-400">
          <input
            type="text"
            value={search}
            className="p-2 outline-none  border border-red-500 rounded-l-xl sm:w-[85%] w-[75%] text-[20px]"
            onChange={(e) => {
              e.preventDefault;
              setsearch(e.target.value);
            }}
          />
          <button
            className="  sm:w-[15%] w-[25%] p-2 text-[20px] rounded-r-xl text-white"
            onClick={Onhandlechange}
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
};
