import UpdateProductCategory from "components/product-category/update/UpdateProductCategory";

const update = ({ params }: { params: { id: number } }) => {
  return <UpdateProductCategory id={params.id}/>
};
export default update;