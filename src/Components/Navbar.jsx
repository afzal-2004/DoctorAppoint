import logo from "../assets/frontend/logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
export const Navbar = () => {
  const [Opennav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!Opennav);
  };
  return (
    <>
      <nav className="   flex  justify-between items-center p-2 h-[50px] sm:h-[70px]  ">
        <h1 className="flex  gap-3  items-center ">
          <img src={logo} alt="" />
          <p className="text-[20px]   xl:text-[25px] font-bold">CareBridge</p>
        </h1>

        {!Opennav ? (
          <CiMenuFries
            className=" sm:hidden cursor-pointer font-semibold text-[20px]"
            onClick={handleNav}
          />
        ) : (
          <IoMdClose
            className="sm:hidden cursor-pointer font-semibold text-[20px]"
            onClick={() => {
              setOpenNav(!Opennav);
            }}
          />
        )}

        <ul
          className={`uppercase gap-3  sm:relative   hidden   sm:flex  sm:text-[14px] `}
        >
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allDoctors"}>All Doctors</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <button
          className={`p-4 bg-blue-500  hidden  text-white  rounded-lg sm:relative    sm:flex `}
        >
          <Link to={"/register"}>Create Account</Link>
        </button>
        {/* Mobile  Menus */}
        {Opennav && (
          <div className=" sm:hidden flex absolute top-[60px]  flex-col  bg-slate-300  w-[50vw]  h-[300px] right-0   justify-between  ">
            <ul className={`uppercase gap-y-5 p-4 `}>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/allDoctors"}>All Doctors</NavLink>
              </li>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/Contact"}>Contact</NavLink>
              </li>
            </ul>
            <button
              className={`p-4 bg-blue-500    text-white     `}
              onClick={handleNav}
            >
              <Link to={"/register"}>Create Account</Link>
            </button>
          </div>
        )}
      </nav>
      <hr className="h-[0.3px] bg-slate-300" />
    </>
  );
};
