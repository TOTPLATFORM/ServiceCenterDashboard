import {UpdateManager} from "components/manager";

const update = ({ params }: { params: { id: string } }) => {
  return <UpdateManager id={params.id}/>
};
export default update;