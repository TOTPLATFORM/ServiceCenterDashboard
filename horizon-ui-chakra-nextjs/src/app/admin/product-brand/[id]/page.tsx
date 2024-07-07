import ProductBrandDetails from "components/product-brand/details/ProductBrandDetails";

const Details = ({ params }: { params: { id: number } }) => {
  return <ProductBrandDetails id={params.id}></ProductBrandDetails>
};
export default Details;