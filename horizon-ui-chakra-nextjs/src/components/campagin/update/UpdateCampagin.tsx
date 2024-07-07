
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { CampaginStatus, ICampagin, ICampaginList } from 'types/Campagin';
import { getByIdCampagin, updateCampagin } from 'libs/endpoints/campagin';
import { enumToArray } from 'utils/enumUtils';

const CampaginUpdateForm = ({ id }: { id: number }) => {
  const [Campagin, setCampagin] = useState<ICampaginList>();
  const router = useRouter();

  const fetchCampagin = async () => {
    setCampagin(await getByIdCampagin(id));
  };

  

  useEffect(() => {
    fetchCampagin();
}, [])

  const handleSubmit = async (formData: ICampagin) => {
    await updateCampagin(formData, id);
    router.push('/admin/campagin');
  };

  const statusOptions = enumToArray(CampaginStatus);


  let fields: IFieldsProps = {
    title: 'Update Campagin ',
    disabled: false,
    fields: [
      {label: "Name", name: "campaginName", inputType: "text", placeholder: "Name"},
      {label: "Description", name: "campaginDescription", inputType: "text", placeholder: "Description"},
      {label: "Goals", name: "goals", inputType: "text", placeholder: "Goals"},
      {label: "Status", name: "status", inputType: "select", placeholder: "Select Status" , options: statusOptions},          
      {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
      {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
      {label: "End Date", name: "endDate", inputType: "date", placeholder: "End Date"},
      {label: "Budget", name: "budget", inputType: "number", placeholder: "Budget"},
      ],
    heading: 'Update Campagin',
    data: Campagin,
    onSubmit: handleSubmit,
  };

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      dropDownLists={fields.dropDownLists}
      heading={fields.heading}
      data={fields.data}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};

export default CampaginUpdateForm;