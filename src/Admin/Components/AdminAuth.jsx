import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Backend_Url } from "../../../public/contstant";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
export const AdminAuth = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    emailOrMobile: "admin@gmail.com",
    Password: "123",
  });
  const handlechange = (e) => {
    e.preventDefault();
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  console.log("This is My admin loghin data", Data);
  const handleAdminLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${Backend_Url}/adminLogin`, Data)
      .then((e) => {
        handlechange;
        console.log(e);
        const adminToken = e.data.AccessToken;
        Cookies.set("adminToken", adminToken);
        toast.success(`${e.data?.message}`, {});

        setTimeout(() => {
          navigate("/adminLayout");
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center max-h-screen mt-[5vh]">
        <form
          className="bg-white p-8 rounded shadow-md max-w-md w-full"
          onSubmit={handleAdminLogin}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email or Mobile No.
            </label>
            <input
              type="text"
              name="emailOrMobile"
              className="loginForminput"
              required
              value={Data.emailOrMobile}
              onChange={handlechange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="Password"
              className="loginForminput"
              required
              value={Data.Password}
              onChange={handlechange}
            />
          </div>

          <button type="submit" className="RegisterandLoginBtn">
            Login
          </button>

          <p className=" mt-3">
            Password Your Password ?{" "}
            <span className="text-blue-400">Reset Passeord</span>
          </p>
        </form>
      </div>
    </>
  );
};
