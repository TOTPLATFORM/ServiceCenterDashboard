
'use client';

import { useState, useEffect } from 'react';
import  CompactForm, {IFieldsProps} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { ICenter } from 'types/Center';
import {  getCenter, updateCenter } from 'libs/endpoints/center';

const CenterUpdateForm = ({ id }: { id: number }) => {


  const [Center, setCenter] = useState<ICenter|undefined>();

  const router = useRouter();



  const fetchCenter = async () => {
    setCenter(await getCenter());
  };

  

  useEffect(() => {
    fetchCenter();
}, [])

  const handleSubmit = async (formData: ICenter) => {
    await updateCenter(formData, id);
    router.push('/admin/center');
  };

  let fields: IFieldsProps = {
    title: 'Update Center ',
    disabled: false,
    fields: [
        {label: "Name", name: "centerName", inputType: "text", placeholder: "Name"},
        {label: "Opening Hours", name: "openingHours", inputType: "number", placeholder: "Opening Hours"},
        {label: "Specialty", name: "specialty", inputType: "text", placeholder: "Specialty"}
    ],
   
    heading: 'Update Center',
    data: Center,
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

export default CenterUpdateForm;