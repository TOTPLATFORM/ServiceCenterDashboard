import ProductCategoryDetails from "components/product-category/details/ProductCategoryDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <ProductCategoryDetails id={params.id}></ProductCategoryDetails>
};
export default Details;