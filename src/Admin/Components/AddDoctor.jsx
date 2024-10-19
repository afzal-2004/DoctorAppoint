/* eslint-disable react/prop-types */
import { CgProfile } from "react-icons/cg";

export const AddDoctor = () => {
  return (
    <>
      <div className=" sm:w-[90%] w-[100%] m-auto">
        <h1 className=" font-semibold">Add Doctor</h1>
        <form action="" className=" bg-white p-3 mt-3">
          <main className=" flex gap-x-5 items-center justify-center">
            <div className=" w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] relative">
              <div className=" sm:w-[150px] w-[100px] h-[100px]  sm:h-[150px] absolute bg-slate-300  rounded-full flex justify-center items-center">
                <CgProfile className=" sm:w-[70px]  sm:h-[70px] w-[50px] h-[50px]" />
              </div>
              <input
                type="file"
                name=""
                id=""
                className="  sm:w-[150px] w-[100px] sm:h-[150px] h-[100px]  absolute opacity-0 "
              />
            </div>
            <p className="text-slate-400">
              <span>
                Upload Doctor <br /> Picture
              </span>
            </p>
          </main>
          <section className=" mt-3  grid sm:grid-cols-2 grid-cols-1">
            <DoctorInput labelField={"Doctor Name"} placeholder={"Name"} />
            <div className=" flex flex-col justify-between gap-x-3  m-2">
              <label htmlFor="Doctor Name">Speciality</label>
              <input
                type="text"
                placeholder="Name"
                className=" border border-black  outline-none p-2 m-2 rounded-md sm:text-[18px] text-[16px] text-black"
              />
            </div>
            <DoctorInput labelField={"Doctor Email"} placeholder={"Email"} />
            <DoctorInput
              labelField={"Doctor Eductaion"}
              placeholder={"Higher Eduction"}
            />
            <DoctorInput
              labelField={"Doctor Address"}
              placeholder={"Address"}
            />

            <div className=" flex flex-col justify-between gap-x-3 m-2">
              <label htmlFor="Doctor Name">Expirence</label>
              <input
                type="text"
                placeholder="Name"
                className=" border border-black  outline-none p-2 m-2 rounded-md sm:text-[18px] text-[16px] text-black"
              />
            </div>

            <DoctorInput labelField={"Fess"} placeholder={"Fess"} />
            <DoctorInput
              labelField={"Abalivility Time"}
              placeholder={"Abalivility Time"}
            />
          </section>
          <div className="w-full mt-7">
            <label htmlFor="About Doctor">About Doctor</label>
            <textarea
              name=""
              id=""
              placeholder="Message"
              className=" w-full border border-black  mt-1  p-2 h-[100px]"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

const DoctorInput = ({ labelField, placeholder }) => {
  return (
    <div className=" flex flex-col justify-between gap-x-3 m-2">
      <label htmlFor="Doctor Name">{labelField}</label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className=" border border-black  outline-none  m-2 rounded-md sm:text-[18px] text-[16px] text-black  p-2"
      />
    </div>
  );
};
