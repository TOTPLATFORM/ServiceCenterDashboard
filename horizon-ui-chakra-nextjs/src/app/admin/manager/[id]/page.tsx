import ManagerDetails from "components/manager/details";

const Details = ({ params }: { params: { id: string } }) => {
  return <ManagerDetails id={params.id}></ManagerDetails>
};
export default Details;