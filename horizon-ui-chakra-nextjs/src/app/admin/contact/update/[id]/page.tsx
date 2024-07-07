import {UpdateContact} from "components/contact/update";

const update = ({ params }: { params: { id: string } }) => {
  return <UpdateContact  id={params.id}/>
};
export default update;