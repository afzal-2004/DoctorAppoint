import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./Components.css";
export const PatinentDetails = () => {
  const { addDoctorAppointment, Login } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const [formData, setFormData] = useState({
    name: "Afzal",
    age: "20",
    gender: "",
    contact: "+0000000000",
    address: "moa545445",
    symptoms: "Synuss",
    doctor: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (Login) {
      e.preventDefault();
      addDoctorAppointment(id);
      toast.success("Doctor Metting Appointed ", {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/Appointments");
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }

    console.log("Patient Data:", formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Patient Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="Patientdetailsforminput"
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="Patientdetailsforminput"
            placeholder="Enter age"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="Patientdetailsforminput"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="Patientdetailsforminput"
            placeholder="Enter contact number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="Patientdetailsforminput"
            placeholder="Enter address"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Symptoms
          </label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            className="Patientdetailsforminput"
            placeholder="Describe symptoms"
            required
          />
        </div>

        <button type="submit" className="RegisterandLoginBtn">
          Submit
        </button>
      </form>
    </div>
  );
};
