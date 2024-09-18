import { useParams } from "react-router-dom";

export const DoctorDetails = () => {
  const { id } = useParams();
  return <div>DoctorDetails{id}</div>;
};
