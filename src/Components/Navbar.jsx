export const Navbar = () => {
  return (
    <>
      <header className=" flex items-center gap-10">
        <img
          src="/bodyFitlogo.avif"
          alt=""
          className="xl:w-[130px] md:w-[130px] w-[70px] sm:w-[100px] rounded-lg  bg-blend-color-burn "
        />
        <ul className=" flex   gap-3  m-3 sm:text-[20px]">
          <li>Home</li>
          <li>Excercise</li>
        </ul>
      </header>
    </>
  );
};
