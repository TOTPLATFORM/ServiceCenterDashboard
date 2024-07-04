import UpdateServicePackage from "components/servicePackage/update/UpdateServicePackage";

const update = ({ params }: { params: { id: number } }) => {
  return <UpdateServicePackage id={params.id}/>
};
export default update;