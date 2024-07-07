import ServiceCategoryDetails from "components/service-category/details/ServiceCategoryDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <ServiceCategoryDetails id={params.id}></ServiceCategoryDetails>
};
export default Details;