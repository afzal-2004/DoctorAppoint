import logo from "../assets/frontend/logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import { AppContext } from "../Context/AppContext";

export const Navbar = () => {
  const { Login, setOpenNav, Opennav } = useContext(AppContext);

  const { data } = useContext(AppContext);
  const handleNav = () => {
    setOpenNav(!Opennav);
  };
  return (
    <>
      <nav className="   flex  justify-between items-center p-2 h-[50px] sm:h-[70px]  ">
        <Link to="/">
          <h1 className="flex  gap-3  items-center ">
            <img src={logo} alt="" />
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

        <div className=" hidden sm:flex">
          {Object.keys(data.emailOrMobile).length > 0 &&
          Object.keys(data.Password).length > 0 &&
          Login ? (
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
            <div className="  sm:flex">
              {Object.keys(data.emailOrMobile).length > 0 &&
              Object.keys(data.Password).length > 0 &&
              Login ? (
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
