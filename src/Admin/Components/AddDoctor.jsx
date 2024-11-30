/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { Backend_Url } from "../../../public/contstant";
import Cookies from "js-cookie";
export const AddDoctor = () => {
  const AdminToken = Cookies.get("token");

  const [avtar, setavtar] = useState(null);
  console.log(" This is My file ", File);
  const [about, setabout] = useState("Hii This is Afzal An Talak Specilist");
  const [Data, setData] = useState({
    name: "",
    speciality: "",
    email: "",
    doctorFees: "",
    experience: "",
    degree: "",
    appointmentTime: "",
    addresss: "",
  });
  const handleFileChange = (e) => {
    setavtar(e.target.files[0]);
  };
  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const HandleSumbit = (e) => {
    e.preventDefault();
    const Formdata = new FormData();
    Formdata.append("avtar", avtar);
    Formdata.append("name", Data.name);
    Formdata.append("speciality", Data.speciality);
    Formdata.append("email", Data.email);
    Formdata.append("doctorFees", Data.doctorFees);
    Formdata.append("experience", Data.experience);
    Formdata.append("degree", Data.degree);
    Formdata.append("appointmentTime", Data.appointmentTime);
    Formdata.append("addresss", Data.addresss);
    Formdata.append("about", about);

    axios
      .post(`${Backend_Url}/addNewDoctor`, Formdata, {
        headers: { Authorization: `Bearer ${AdminToken}` },
      })
      .then((e) => {
        console.log(e);

        setData({
          name: "",
          speciality: "",
          email: "",
          doctorFees: "",
          experience: "",
          degree: "",
          appointmentTime: "",
          addresss: "  ",
        });
        setabout("");
        setavtar(null);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className=" sm:w-[90%] w-[100%] m-auto">
        <form action="" onSubmit={HandleSumbit} className=" bg-white p-3 mt-3">
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
                onChange={handleFileChange}
              />
            </div>
            <p className="text-slate-400">
              <span>
                {!avtar ? (
                  <>
                    Upload Doctor <br /> Picture
                  </>
                ) : (
                  avtar.name
                )}
              </span>
            </p>
          </main>
          <section className=" mt-3  grid sm:grid-cols-2 grid-cols-1">
            <DoctorInput
              labelField={"Doctor Name"}
              placeholder={"Name"}
              event={handleChange}
              name="name"
              value={Data.name}
            />
            <div className=" flex flex-col justify-between gap-x-3  m-2">
              <DoctorInput
                labelField={"Speciality"}
                placeholder={"Speciality"}
                event={handleChange}
                name="Speciality"
                value={Data.email}
              />
            </div>
            <DoctorInput
              labelField={"Doctor Email"}
              placeholder={"Email"}
              event={handleChange}
              name="email"
              value={Data.email}
            />
            <DoctorInput
              labelField={"Doctor Eductaion"}
              placeholder={"Higher Eduction"}
              event={handleChange}
              name="degree"
              value={Data.degree}
            />
            <DoctorInput
              labelField={"Doctor Address"}
              placeholder={"Address"}
              event={handleChange}
              name="addresss"
              value={Data.addresss}
            />

            <div className=" flex flex-col justify-between gap-x-3 m-2">
              <label htmlFor="Doctor Name">Expirence</label>
              <input
                type="text"
                placeholder="Name"
                className=" border border-black  outline-none p-2 m-2 rounded-md sm:text-[18px] text-[16px] text-black"
              />
            </div>

            <DoctorInput
              labelField={"Fess"}
              placeholder={"Fess"}
              event={handleChange}
              name="doctorFees"
              value={Data.doctorFees}
            />
            <DoctorInput
              labelField={"Abalivility Time"}
              placeholder={"Abalivility Time"}
              event={handleChange}
              name="appointmentTime"
              value={Data.appointmentTime}
            />
          </section>
          <div className="w-full mt-2">
            <label htmlFor="About Doctor">About Doctor</label>
            <textarea
              name="about"
              id=""
              value={about}
              placeholder="Message"
              className=" w-full border border-black  mt-1  p-2 h-[100px]"
              onChange={(e) => {
                setabout(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            className="bg-red-500 p-2 border 
          border-black rounded-lg"
          >
            {" "}
            Post Doctor
          </button>
        </form>
      </div>
    </>
  );
};

const DoctorInput = ({ labelField, placeholder, event, name, value }) => {
  return (
    <div className=" flex flex-col justify-between gap-x-3 m-2">
      <label htmlFor="Doctor Name">{labelField}</label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={`${placeholder}`}
        className=" border border-black  outline-none  m-2 rounded-md sm:text-[18px] text-[16px] text-black  p-2"
        onChange={event}
      />
    </div>
  );
};
