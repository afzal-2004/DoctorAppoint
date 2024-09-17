import Hedaderimage from "../../assets/frontend/header_img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { specialityData, doctors } from "../../assets/frontend/assets";
import { GoDotFill } from "react-icons/go";
export const Home = () => {
  return (
    <main>
      <section className="bg-blue-500  flex  sm:flex-row flex-col-reverse justify-between items-center">
        {" "}
        <div className="  flex flex-col justify-center items-center p-3 sm:p-0 ">
          {" "}
          <h1 className="sm:text-[45px] md:text-[50px] text-[30px] text-white sm:font-bold font-semibold text-nowrap sm:text-wrap ml-4">
            Book Appointment
            <br />
            With Trusted Doctors
          </h1>
          <div className=" flex items-center gap-3">
            <img src="/frontend/group_profiles.png" alt="" />
            <p className="text-white m-4 sm:m-7  font-normal">
              Simply browse through our extensive list of trusted
              <br />
              doctors, schedule your appointment hassle-free.
            </p>
          </div>
          <button className="bg-white rounded-3xl p-3 flex gap-3 justify-between  items-center mt-[5vh]">
            {" "}
            Book Appointment
            <FaArrowRightLong />
          </button>
        </div>
        <div>
          <img
            src={Hedaderimage}
            alt=""
            className="sm:w-[600px]    md:w-[700px]"
          />
        </div>
      </section>
      <section className=" mt-[5vh]">
        <h1 className="text-[25px] sm:text-[35px] font-semibold text-center">
          Find by Speciality
        </h1>
        <p className="text-[10px] sm:text-[15px] w-[70%] sm:w-[45%] text-center m-auto mt-[5vh]">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div className="flex gap-3 sm:gap-5 flex-wrap justify-center mt-[5vh]">
          {specialityData.map((data, i) => (
            <div key={i} className=" gap-3 ">
              <img src={data.image} alt="" className="w-[70px] " />
              <p className="text-nowrap text-[12px]">{data.speciality}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" mt-[5vh]">
        <h1 className="text-[25px] sm:text-[35px] font-semibold text-center">
          Top Doctors to Book
        </h1>
        <p className="text-[10px] sm:text-[15px] w-[70%] sm:w-[45%] text-center m-auto mt-[1vh]">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <main className="  gap-4 grid   grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:gap-6   p-10   justify-center ">
          {doctors.map((data, i) => (
            <div
              key={i}
              className={`flex flex-col  items-center rounded-lg  mt-3 border border-slate-200 ${
                i > 9 && "hidden"
              }`}
            >
              <div>
                <img
                  src={data.image}
                  alt=""
                  className=" bg-blue-50 rounded-lg  "
                />

                <div className=" flex flex-col p-3">
                  <p className="flex items-center text-green-300 ">
                    <GoDotFill />
                    Avalible
                  </p>
                  <h2>{data.name}</h2>
                  <p>{data.speciality}</p>
                </div>
              </div>
            </div>
          ))}
        </main>
        <div className=" flex justify-center">
          <button className="text-center bg-blue-300 py-3 px-10 font-normal rounded-3xl">
            More ..
          </button>
        </div>
      </section>
    </main>
  );
};
