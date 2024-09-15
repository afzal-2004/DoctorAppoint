export const SearchExercies = () => {
  return (
    <>
      <section className=" mt-[3vh] sm:mt-[5vh] text-center">
        <h3 className="utilsStyle font-medium">
          Awesome Exercise you Should Know
        </h3>
        <div className="  rounded-xl   max-w-[90vw] sm:w-[70vw] m-auto  sm:mt-[5vh] bg-red-400">
          <input
            type="text"
            className="p-2 outline-none  border border-red-500 rounded-l-xl sm:w-[85%] w-[75%] text-[20px]"
          />
          <button className="  sm:w-[15%] w-[25%] p-2 text-[20px] rounded-r-xl text-white">
            Search
          </button>
        </div>
      </section>
    </>
  );
};
