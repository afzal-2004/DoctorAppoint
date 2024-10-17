import { useNavigate } from "react-router";

export const AdminAuth = () => {
  const navigate = useNavigate();
  const handleAdminLogin = () => {
    navigate("/adminLayout");
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
              //   required
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
              //   required
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
