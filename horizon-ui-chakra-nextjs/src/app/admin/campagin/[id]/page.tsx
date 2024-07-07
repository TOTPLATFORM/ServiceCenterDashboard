import CampaginDetails from "components/campagin/details/CampaginDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <CampaginDetails id={params.id}></CampaginDetails>
};
export default Details;