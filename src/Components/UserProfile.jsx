/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Profile_pic from "../assets/frontend/profile_pic.png";
// import { CiEdit } from "react-icons/ci";
import { AppContext } from "../Context/AppContext";
import { FaChevronLeft } from "react-icons/fa";
import "./Components.css";
import Cookies from "js-cookie";
export const UserProfile = () => {
  const token = Cookies.get("token");
  const { Profile, setOpenNav } = useContext(AppContext);
  // console.log("This is my Profile data ", Profile);
  const [OpenProfilenav, setOpenProfilenav] = useState(false);

  const handelProfileNav = (OpenProfilenav) => {
    setOpenProfilenav(!OpenProfilenav);
  };
  return (
    <>
      {token && (
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
  // const [Edit, setEdit] = useState(false);
  // const { Registerdata } = useContext(AppContext);
  // const Profiledata = [
  //   {
  //     title: "Name",
  //     property: Registerdata.name,
  //   },
  //   {
  //     title: "Email",
  //     property: Registerdata.email,
  //   },
  //   {
  //     title: "Contact",
  //     property: Registerdata.Mobilenumner,
  //   },
  //   {
  //     title: "Address",
  //     property: Registerdata.Address,
  //   },
  //   {
  //     title: "DOB",
  //     property: Registerdata.DOB,
  //   },
  //   {
  //     title: "Gender",
  //     property: Registerdata.Gender,
  //   },
  // ];
  // const HandleEdit = () => {
  //   setEdit(!Edit);
  // };
  return (
    <>This is My Profile data</>
    // <>
    //   <main className="bg-slate-500 p-5">
    //     {Registerdata.name.length > 0 && (
    //       <div className=" uppercase text-white   bg-yellow-300 w-[50px] h-[50px]  flex justify-center items-center p-2 rounded-full ">
    //         <p>{Registerdata.name[0]}</p>
    //       </div>
    //     )}

    //     <h1 className=" text-white text-center text-[28px] font-semibold">
    //       User Profile
    //     </h1>
    //     <section className=" p-3   shadow-lg  w-full sm:w-[90%] m-auto  sm:rounded-md text-white">
    //       <div className=" p-4">
    //         {Profiledata.map((data, i) => (
    //           <ul
    //             key={i}
    //             className="  text-[16px] sm:text-[18px]  profiledetails items-center"
    //           >
    //             {" "}
    //             <li className="col-span-1 m-2">{data.title} </li>
    //             <input
    //               type="text"
    //               className=" col-span-3 sm:m-2 ml-auto  outline-none bg-slate-500 p-1 "
    //               value={data.property}
    //               readOnly={Edit ? true : false}
    //             />
    //             <li
    //               className="col-span-1  flex  justify-end "
    //               onClick={HandleEdit}
    //             >
    //               <CiEdit />
    //             </li>
    //           </ul>
    //         ))}
    //       </div>
    //     </section>
    //     <button className="  bg-red-400 py-2 px-3 rounded-md mt-[3vh]">
    //       Save
    //     </button>
    //   </main>
    // </>
  );
};
