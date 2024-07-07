import UpdateCampagin from "components/campagin/update/UpdateCampagin";

const update = ({ params }: { params: { id: number } }) => {
  return <UpdateCampagin id={params.id}/>
};
export default update;