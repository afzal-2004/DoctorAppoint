import { Link } from "react-router-dom";
import { FaHome, FaAddressBook } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { useState } from "react";
export const AdminSidebar = () => {
  const [navItem, setnavItem] = useState("1");

  return (
    <div
      className="   xl:min-h-[98vh] m-auto  border-black xl:border xl:border-r-2 border-l-0 border-b-0 border-t-0   p-1 
        
     sm:min-w-[20%] md:min-w-[20%]  cursor-pointer  sm:block"
    >
      <ul className="flex xl:flex-col flex-row gap-y-3  text-nowrap">
        <Link to={"/adminLayout"}>
          <li
            className={`flex items-center  gap-x-5 p-2 w-full  sm:text-[20px] flex-nowrap ${
              navItem === "1" && "bg-blue-50"
            }`}
            onClick={() => setnavItem("1")}
          >
            <FaHome />
            Home
          </li>
        </Link>
        <Link to={"/adminLayout/adddoctor"}>
          <li
            className={`flex items-center  p-2 gap-x-5 sm:text-[20px] flex-nowrap ${
              navItem === "2" && "bg-blue-50"
            }`}
            onClick={() => setnavItem("2")}
          >
            <FaAddressBook />
            Add doctor
          </li>
        </Link>

        <Link to={"/adminLayout/allDoctorList"}>
          <li
            className={`flex items-center  p-2 gap-x-5 sm:text-[20px] flex-nowrap ${
              navItem === "3" && "bg-blue-50"
            }`}
            onClick={() => setnavItem("3")}
          >
            <CiViewList />
            All Doctor
          </li>
        </Link>
      </ul>
    </div>
  );
};

export const AdminNavbar = () => {
  return (
    <nav className="   flex  justify-between items-center p-2 h-[50px] sm:h-[70px]  ">
      <Link to={"/"} className=" font-semibold sm:text-[20px] text-[27px]">
        <h1 className=" flex  items-center gap-3">
          <img src="frontend/logo.svg" alt="" />
          careBridge
        </h1>
      </Link>

      <button className="bg-blue-400 px-4 py-2  rounded-xl">Logout</button>
    </nav>
  );
};
