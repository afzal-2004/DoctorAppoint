/* eslint-disable react/prop-types */
export const ExercisesCard = ({ data }) => {
  return (
    <>
      <div
        className="  p-3  
        sm:w-[200px] 
      sm:h-[250px] w-[150px] h-[200px]  md:w-[250px] md:h-[300px]  xl:w-[300px] xl:h-[350px] rounded-lg"
      >
        <img src={data.gifUrl} alt="" className="rounded-lg" />
        <button className="bg-blue-500  m-1 p-1 sm:m-2 sm:p-2 rounded-lg uppercase sm:text-[15px] text-[10px]">
          {data.bodyPart}
        </button>
        <button className=" bg-red-300 sm:m-2 sm:p-2  p-1 m-1 rounded-lg uppercase sm:text-[15px] text-[10px]">
          {data.target}
        </button>
      </div>
    </>
  );
};
