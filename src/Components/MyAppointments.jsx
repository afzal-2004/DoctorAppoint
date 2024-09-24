import { AppContext } from "../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export const MyAppointments = () => {
  const { AppointmentsDoctorsid } = useContext(AppContext);
  console.log(AppointmentsDoctorsid);
  const [AppointedDoc, setAppointedDoc] = useState([]);
  console.log("data of Doctor is ", AppointedDoc);
  useEffect(() => {
    axios.get("/Doctor.json").then((res) => {
      console.log(res.data);
      const Doctordata = res.data;
      const Doctors = Doctordata?.filter((doc) =>
        AppointmentsDoctorsid.includes(doc._id)
      );
      setAppointedDoc(Doctors);
    });
  }, [AppointmentsDoctorsid]);

  return (
    <div className=" mt-[8vh]">
      <h1>My appointments </h1>
      {/* {AppointedDoc.map((doctor, i) => (
        <div key={i}>
          <img src={doctor.image} alt="" />
          <div>
            <h2>{doctor.name}</h2>
            <p>{doctor.about}</p>
            <span>{doctor.address}</span>
            <p>{doctor.degree}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};
