/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Profile_pic from "../assets/frontend/profile_pic.png";

import { AppContext } from "../Context/AppContext";
import { FaChevronLeft } from "react-icons/fa";
import "./Components.css";

// import { toast } from "react-toastify";

export const UserProfile = () => {
  const { Profile, setOpenNav, setlogin } = useContext(AppContext);
  const [OpenProfilenav, setOpenProfilenav] = useState(false);
  const handelProfileNav = (OpenProfilenav) => {
    setOpenProfilenav(!OpenProfilenav);
  };
  return (
    <>
      {setlogin && (
        <div className=" sm:flex items-center gap-1 hidden ">
          {Profile.profilePicture ? (
            <img src={Profile_pic} alt="" className="w-[50px] rounded-full" />
          ) : (
            <p className="w-[50px]  h-[50px] rounded-full bg-yellow-400 text-black  sm:flex  justify-center items-center text-[20px]  ">
              {Profile.name?.[0]}
            </p>
          )}
          <IoIosArrowDown
            className=" text-black text-[20px] font-semibold"
            onClick={() => {
              handelProfileNav(OpenProfilenav);
            }}
          />
        </div>
      )}

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
  const { setOpenNav } = useContext(AppContext);

  return (
    <>
      <div
        className=" absolute text-black 
        top-[40vh] right-[43vw]  z-50
         sm:top-[70px]  sm:right-[0px] min-w-[200px]"
      >
        <ul
          className="p-2  bg-slate-200 text-[17px] rounded-lg"
          onClick={() => setOpenNav(false)}
        >
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
            <li
              className="p-1  hover:text-blue-500"
              onClick={() => {
                handelProfileNav();
              }}
            >
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export const MyProfile = () => {
  const { Profile } = useContext(AppContext);
  const Profiledata = [
    {
      title: "Name",
      property: Profile.name,
    },
    {
      title: "Email",
      property: Profile.email,
    },
    {
      title: "Contact",
      property: Profile.Mobilenumer,
    },
  ];

  return (
    <>
      <main className="bg-slate-500 p-5">
        {Profile && (
          <p className="w-[50px]  h-[50px] rounded-full bg-yellow-400 text-black flex     justify-center items-center text-[20px]  ">
            {Profile.name?.[0]}
          </p>
        )}

        <h1 className=" text-white text-center text-[28px] font-semibold">
          User Profile
        </h1>
        <section className=" p-3   shadow-lg  w-full sm:w-[90%] m-auto  sm:rounded-md text-white">
          <div className=" p-4">
            {Profiledata.map((data, i) => (
              <ul
                key={i}
                className="  text-[16px] sm:text-[18px]  profiledetails items-center"
              >
                {" "}
                <li className="col-span-1 m-2">{data.title} </li>
                <li className=" col-span-3 sm:m-2 ml-auto  outline-none bg-slate-500 p-1 ">
                  {data.property}
                </li>
                <li className="col-span-1  flex  justify-end "></li>
              </ul>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
