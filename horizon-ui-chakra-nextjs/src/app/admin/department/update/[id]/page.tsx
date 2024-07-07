import UpdateDepartment from "components/department/update/UpdateDepartment";

const update = ({ params }: { params: { id: number } }) => {
  return <UpdateDepartment id={params.id}/>
};
export default update;