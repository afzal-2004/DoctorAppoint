import logo from "../assets/frontend/logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export const Navbar = () => {
  const [Opennav, setOpenNav] = useState(false);
  return (
    <>
      <nav className="   flex  justify-between items-center p-2 h-[50px] sm:h-[70px]  ">
        <h1 className="flex  gap-3  items-center ">
          <img src={logo} alt="" />
          <p>Name</p>
        </h1>

        {!Opennav ? (
          <CiMenuFries
            className=" sm:hidden cursor-pointer font-semibold text-[20px]"
            onClick={() => {
              setOpenNav(!Opennav);
            }}
          />
        ) : (
          <IoMdClose
            className="sm:hidden cursor-pointer font-semibold text-[20px]"
            onClick={() => {
              setOpenNav(!Opennav);
            }}
          />
        )}

        <ul className={`uppercase gap-3  sm:relative   hidden   sm:flex  `}>
          <li>Home</li>
          <li>All Doctors</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button
          className={`p-4 bg-blue-500  hidden  text-white  rounded-lg sm:relative    sm:flex `}
        >
          Create Account
        </button>
        {/* Mobile  Menus */}
        {Opennav && (
          <div className=" sm:hidden flex absolute top-[60px]  flex-col  bg-slate-300  w-[50vw]  h-[300px] right-0   justify-between  ">
            <ul className={`uppercase gap-y-5 p-4 `}>
              <li className="p-2">Home</li>
              <li className="p-2">All Doctors</li>
              <li className="p-2">About</li>
              <li className="p-2">Contact</li>
            </ul>
            <button className={`p-4 bg-blue-500    text-white     `}>
              Create Account
            </button>
          </div>
        )}
      </nav>
      <hr className="h-[0.3px] bg-slate-300" />
    </>
  );
};
