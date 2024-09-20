import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    Mobilenumner: "",
    Password: "",
  });
  const handelChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleData = (e) => {
    e.preventDefault();
    console.log(data);
    toast.success("Register SuccesFully", {
      autoClose: 2000,
    });
    setdata({ name: "", email: "", Mobilenumner: "", Password: "" });
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleData}
        className="bg-white p-8 rounded shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handelChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handelChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            MobileNumber
          </label>
          <input
            type="text"
            name="Mobilenumner"
            value={data.Mobilenumner}
            onChange={handelChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={data.Password}
            name="Password"
            onChange={handelChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
        <Link to="/login">
          <p className=" mt-3">
            Already Have An Accont ?{" "}
            <span className="text-blue-400">Login</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    emailOrMobile: "",
    Password: "",
  });
  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };
  const handleData = (e) => {
    e.preventDefault();
    console.log(data);
    toast.success("login");
    setdata({
      emailOrMobile: "",
      Password: "",
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center max-h-screen mt-[5vh]">
      <form
        onSubmit={handleData}
        className="bg-white p-8 rounded shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email or Mobile No.
          </label>
          <input
            type="text"
            value={data.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="Password"
            value={data.Password}
            className="w-full px-3 py-2 border rounded-md"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <Link to="/register">
          <p className=" mt-3">
            Not Have An Accont ?{" "}
            <span className="text-blue-400">Regitster</span>
          </p>
        </Link>
      </form>
    </div>
  );
};
