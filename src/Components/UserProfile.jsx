import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Profile_pic from "../assets/frontend/profile_pic.png";
import { AppContext } from "../Context/AppContext";
export const UserProfile = () => {
  const { Registerdata } = useContext(AppContext);
  const [OpenProfilenav, setOpenProfilenav] = useState(false);
  const handelProfileNav = () => {
    setOpenProfilenav(!OpenProfilenav);
  };
  return (
    <>
      <div className=" flex items-center gap-1 ">
        {Registerdata.profilePicture ? (
          <img src={Profile_pic} alt="" className="w-[50px] rounded-full" />
        ) : (
          <p className="w-[50px]  h-[50px] rounded-full bg-yellow-400 text-black  flex  justify-center items-center text-[20px]">
            {Registerdata.name[0]}
          </p>
        )}
        <IoIosArrowDown
          className=" text-black text-[20px] font-semibold"
          onClick={handelProfileNav}
        />
      </div>
      {OpenProfilenav ? (
        <div
          className=" absolute text-black top-[50px]
         sm:top-[70px]  right-[0px] min-w-[200px]"
        >
          <ul className="p-2  bg-slate-200 text-[17px] rounded-lg">
            <Link to={"/userProfile"}>
              <li
                className="p-1 hover:text-blue-500"
                onClick={handelProfileNav}
              >
                My Profile
              </li>
            </Link>

            <Link to={"/Appointments"}>
              <li
                className="p-1  hover:text-blue-500"
                onClick={handelProfileNav}
              >
                My Appointments
              </li>
            </Link>

            <Link>
              <li
                className="p-1  hover:text-blue-500"
                onClick={handelProfileNav}
              >
                Logout
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export const MyProfile = () => {
  return (
    <>
      <h1>My profile Section</h1>
    </>
  );
};
