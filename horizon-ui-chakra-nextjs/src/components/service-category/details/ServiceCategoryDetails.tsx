
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  IServiceCategoryList } from 'types/ServiceCategory';
import { useRouter } from 'next/navigation';
import { getByIdServiceCategory } from 'libs/endpoints/service-category';

const ServiceCategoryDetails = ({ id }: { id: number }) => {
  const [ServiceCategory, setServiceCategory] = useState<IServiceCategoryList>();
 
  const router = useRouter();

  const fetchServiceCategory = async () => {
    setServiceCategory(await getByIdServiceCategory(id));
  };

 
  useEffect(() => {
    fetchServiceCategory();
   }, [])

  const handleSubmit = async (formData: IServiceCategoryList) => {
    router.push('/admin/service-category');
  };

  let fields: IFieldsProps = {
    title: 'ServiceCategory Details',
    disabled: true,
    fields: [
        {label: "Name", name: "serviceCategoryName", inputType: "text", placeholder: "Name"},
        {label: "Description", name: "serviceCategoryDescription", inputType: "text", placeholder: "Description"}
    ],
    heading: 'Back to ServiceCategorys',
    data: ServiceCategory,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchServiceCategory();
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




export default ServiceCategoryDetails;
