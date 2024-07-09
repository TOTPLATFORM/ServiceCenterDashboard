import RatingServiceDetails from "components/rating/details/RatingDetails";

const Details = ({ params }: { params: { id: string } }) => {
  return <RatingServiceDetails id={params.id}></RatingServiceDetails>
};
export default Details;