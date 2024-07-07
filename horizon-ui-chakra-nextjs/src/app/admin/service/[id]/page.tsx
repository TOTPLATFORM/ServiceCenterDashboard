import ServiceDetails from "components/service/details/ServiceDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <ServiceDetails id={params.id}></ServiceDetails>
};
export default Details;