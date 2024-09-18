export const Sidebar = () => {
  return (
    <>
      <div className=" hidden sm:flex  md:m-[2vh] xl:m-[5vh]  cursor-pointer">
        <ul className="  min-w-[200px] gap-3">
          <li className="p-2 text-center border border-black">
            General physician
          </li>
          <li className="p-2 text-center border border-black">Gynecologist</li>
          <li className="p-2 text-center border border-black">Dermatologist</li>
          <li className="p-2 text-center border border-black">Pediatricians</li>
          <li className="p-2 text-center border border-black">Neurologist</li>
          <li className="p-2 text-center border border-black">
            Gastroenterologist
          </li>
        </ul>
      </div>
    </>
  );
};
