/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Profile_pic from "../assets/frontend/profile_pic.png";
import upload_area from "../assets/frontend/upload_area.png";
import { CiEdit } from "react-icons/ci";
import { EditForm } from "./EditForm";
import { AppContext } from "../Context/AppContext";
import { FaChevronLeft } from "react-icons/fa";
export const UserProfile = () => {
  const { Registerdata, setOpenNav } = useContext(AppContext);

  const [OpenProfilenav, setOpenProfilenav] = useState(false);
  console.log("Profie logic is ", OpenProfilenav);
  const handelProfileNav = (OpenProfilenav) => {
    setOpenProfilenav(!OpenProfilenav);
  };
  return (
    <>
      <div className=" sm:flex items-center gap-1 hidden ">
        {Registerdata.profilePicture ? (
          <img src={Profile_pic} alt="" className="w-[50px] rounded-full" />
        ) : (
          <p className="w-[50px]  h-[50px] rounded-full bg-yellow-400 text-black  sm:flex  justify-center items-center text-[20px]  ">
            {Registerdata.name[0]}
          </p>
        )}
        <IoIosArrowDown
          className=" text-black text-[20px] font-semibold"
          onClick={handelProfileNav}
        />
      </div>

      <div
        className="  flex sm:hidden text-[20px] justify-evenly items-center text-black "
        onClick={() => {
          handelProfileNav(OpenProfilenav);
        }}
      >
        <FaChevronLeft
          className=" text-black text-[20px] font-semibold"
          onClick={() => {
            setOpenNav(false);
          }}
        />
        Account
      </div>
      {OpenProfilenav && <ProfileSidebar handelProfileNav={handelProfileNav} />}
    </>
  );
};
const ProfileSidebar = ({ handelProfileNav }) => {
  return (
    <>
      <div
        className=" absolute text-black 
        top-[40vh] right-[43vw]
         sm:top-[70px]  sm:right-[0px] min-w-[200px]"
      >
        <ul className="p-2  bg-slate-200 text-[17px] rounded-lg">
          <Link to={"/userProfile"}>
            <li className="p-1 hover:text-blue-500" onClick={handelProfileNav}>
              My Profile
            </li>
          </Link>

          <Link to={"/Appointments"}>
            <li className="p-1  hover:text-blue-500" onClick={handelProfileNav}>
              My Appointments
            </li>
          </Link>

          <Link>
            <li className="p-1  hover:text-blue-500" onClick={handelProfileNav}>
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export const MyProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const { Registerdata, setRegisterdata } = useContext(AppContext);
  const [openForm, setopenForm] = useState(false);
  return (
    <>
      <section className=" relative">
        <div className="flex gap-4">
          {Registerdata.profilePicture ? (
            <img src={Profile_pic} alt="" className="w-[150px]  rounded-md" />
          ) : (
            <p className="w-[150px]  h-[150px] rounded-full bg-yellow-400 text-black  flex  justify-center items-center text-[20px]">
              <img src={upload_area} alt="" />
            </p>
          )}
        </div>
        <h1 className="sm:text-[25px] font-semibold text-[20px]  m-4">
          {Registerdata.name}
        </h1>
        <hr className=" bg-black" />
        <div className="    sm:w-[50%] xl:w-[30%] m-3">
          <span className=" uppercase underline  font-semibold">
            contact Information
          </span>
          <p className="  flex justify-between  m-3">
            <span>Emailid :</span>
            <span>{Registerdata.email}</span>
          </p>
          <p className="  flex justify-between m-3">
            <span>Phone:</span>
            <span>{Registerdata.Mobilenumner}</span>
          </p>
          <p className="  flex justify-between m-3">
            <span>Address :</span>
            <span>{Registerdata.Address}</span>
          </p>
        </div>
        <div className="    sm:w-[50%] xl:w-[30%]">
          <h3 className=" uppercase underline font-semibold">
            basic information
          </h3>
          <p className="  flex justify-between m-3">
            <span>Gender :</span>
            <span>{Registerdata.Gender}</span>
          </p>
          <p className="  flex justify-between m-3">
            <span>Birthday :</span>
            <span>{Registerdata.DOB}</span>
          </p>
        </div>
        <div className=" gap-10  flex m-4">
          <button
            className="  border border-slate-500 py-2 px-4 rounded-2xl flex  gap-3"
            onClick={() => {
              setopenForm(!openForm);
            }}
          >
            <CiEdit /> Edit{" "}
          </button>
        </div>
        {openForm && <EditForm setopenForm={setopenForm} />}
      </section>
    </>
  );
};
