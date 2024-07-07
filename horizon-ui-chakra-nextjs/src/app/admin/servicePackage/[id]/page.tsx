import ServicePackageDetails from "components/servicePackage/details/ServicePackageDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <ServicePackageDetails id={params.id}></ServicePackageDetails>
};
export default Details;