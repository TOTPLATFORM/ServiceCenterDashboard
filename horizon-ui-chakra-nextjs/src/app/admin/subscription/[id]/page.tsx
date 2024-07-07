import { SubscriptionDetails } from "components/subscription";

const Details = ({ params }: { params: { id: number } }) => {
  
  return <SubscriptionDetails id={params.id}></SubscriptionDetails>
};
export default Details;