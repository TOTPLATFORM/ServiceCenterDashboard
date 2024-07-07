import UpdateServiceCategory from "components/service-category/update/UpdateServiceCategory";

const update = ({ params }: { params: { id: number } }) => {
  return <UpdateServiceCategory id={params.id}/>
};
export default update;