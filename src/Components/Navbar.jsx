import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { AppContext } from "../Context/AppContext";
import "./Components.css";
export const Navbar = () => {
  const { token, setOpenNav, Opennav } = useContext(AppContext);

  const handleNav = () => {
    setOpenNav(!Opennav);
  };
  return (
    <>
      <nav className="   flex  justify-between items-center p-2 h-[50px] sm:h-[70px]  ">
        <Link to="/">
          <h1 className="flex  gap-3  items-center ">
            <img src="frontend/logo.svg" alt="" />
            <p className="text-[20px]   xl:text-[25px] font-bold">CareBridge</p>
          </h1>
        </Link>

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
            <NavLink to={"/"} className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/allDoctors"} className="nav-item">
              All Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="nav-item">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="nav-item">
              Contact
            </NavLink>
          </li>
          <li className="text-[12px] border border-blue-200 rounded-xl px-2 py-1 ">
            <NavLink to={"/admin"} className="nav-item">
              Admin
            </NavLink>
          </li>
        </ul>

        <div className=" hidden sm:flex">
          {token ? (
            <div
              className={`  hidden  text-white  rounded-[30px] sm:relative    sm:flex `}
            >
              <UserProfile />
            </div>
          ) : (
            <Link to={"/register"}>
              <button
                className={`p-4 bg-blue-500  hidden  text-white  rounded-[30px] sm:relative    sm:flex hover:bg-blue-400 `}
              >
                Create Account
              </button>
            </Link>
          )}
        </div>

        {/* Mobile  Menus */}
        {Opennav && (
          <div className=" sm:hidden flex absolute top-[60px]  flex-col  bg-slate-300  w-[50vw]  h-[300px] right-0   justify-between z-50  ">
            <ul className={`uppercase gap-y-5 p-4 `}>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/"} className="nav-item">
                  Home
                </NavLink>
              </li>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/allDoctors"} className="nav-item">
                  All Doctors
                </NavLink>
              </li>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/about"} className="nav-item">
                  About
                </NavLink>
              </li>
              <li className="p-2" onClick={handleNav}>
                <NavLink to={"/Contact"} className="nav-item">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="  sm:flex">
              {token ? (
                <div
                  className={`    text-white  rounded-[30px] sm:relative     `}
                >
                  <UserProfile />
                </div>
              ) : (
                <Link to={"/register"}>
                  <button
                    className={`p-4 bg-blue-500   w-full text-white  sm:relative    sm:flex hover:bg-blue-400 `}
                    onClick={() => {
                      setOpenNav(false);
                    }}
                  >
                    Create Account
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
      <hr className="h-[0.3px] bg-slate-300" />
    </>
  );
};
