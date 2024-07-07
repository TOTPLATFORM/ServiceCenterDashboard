import UpdateProductBrand from "components/product-brand/update/UpdateProductBrand";

const update = ({ params }: { params: { id: number } }) => {
  return <UpdateProductBrand id={params.id}/>
};
export default update;