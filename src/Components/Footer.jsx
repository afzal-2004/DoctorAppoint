import logo from "../assets/frontend/logo.svg";

export const Footer = () => {
  return (
    <footer className=" mt-[5vh] ">
      <div className="mx-auto w-full  p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className=" md:max-w-[50%]">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap  text-gray-300">
                  Name
                </span>
              </a>
            </div>
            <div className=" md:w-[70%] m-10 mt-3">
              <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold tuppercase  ">
                Company
              </h2>
              <ul className="  text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold t uppercase  text-gray-500">
                Follow us
              </h2>
              <ul className="text-gray-500   font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Github
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold ppercase  text-white">
                Legal
              </h2>
              <ul className="text-gray-500   font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto   lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center  text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              name™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
