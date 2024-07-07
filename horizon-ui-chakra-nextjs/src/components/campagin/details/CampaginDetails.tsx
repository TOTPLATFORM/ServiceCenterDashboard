
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  ICampaginList } from 'types/Campagin';
import { useRouter } from 'next/navigation';
import { getByIdCampagin } from 'libs/endpoints/campagin';

const CampaginDetails = ({ id }: { id: number }) => {
  const [Campagin, setCampagin] = useState<ICampaginList>();
 
  const router = useRouter();

  const fetchCampagin = async () => {
    setCampagin(await getByIdCampagin(id));
  };

 
  useEffect(() => {
    fetchCampagin();
   }, [])

  const handleSubmit = async (formData: ICampaginList) => {
    router.push('/admin/campagin');
  };

  let fields: IFieldsProps = {
    title: 'Campagin Details',
    disabled: true,
    fields: [
      {label: "Name", name: "campaginName", inputType: "text", placeholder: "Name"},
      {label: "Description", name: "campaginDescription", inputType: "text", placeholder: "Description"},
      {label: "Goals", name: "goals", inputType: "text", placeholder: "Goals"},
      {label: "Status", name: "status", inputType: "text", placeholder: "Status"},
      {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
      {label: "End Date", name: "endDate", inputType: "date", placeholder: "End Date"},
      {label: "Budget", name: "budget", inputType: "number", placeholder: "Budget"},
    ],
    heading: 'Back to Campagins',
    data: Campagin,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchCampagin();
  }, []);

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      heading={fields.heading}
      data={fields.data}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};




export default CampaginDetails;
