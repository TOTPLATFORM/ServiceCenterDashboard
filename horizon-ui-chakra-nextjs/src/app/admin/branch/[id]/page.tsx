import BranchDetails from "components/branch/details/BranchDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <BranchDetails id={params.id}></BranchDetails>
};
export default Details;