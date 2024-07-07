import DepartmentDetails from "components/department/details/DepartmentDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <DepartmentDetails id={params.id}></DepartmentDetails>
};
export default Details;