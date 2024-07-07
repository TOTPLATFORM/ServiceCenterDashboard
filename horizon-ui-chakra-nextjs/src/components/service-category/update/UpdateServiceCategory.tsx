
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IServiceCategory, IServiceCategoryList } from 'types/ServiceCategory';
import { getByIdServiceCategory, updateServiceCategory } from 'libs/endpoints/service-category';

const ServiceCategoryUpdateForm = ({ id }: { id: number }) => {
  const [ServiceCategory, setServiceCategory] = useState<IServiceCategoryList>();

  const router = useRouter();

  const fetchServiceCategory = async () => {
    setServiceCategory(await getByIdServiceCategory(id));
  };  

  useEffect(() => {
    fetchServiceCategory();
}, [])

  const handleSubmit = async (formData: IServiceCategory) => {
    await updateServiceCategory(formData, id);
    router.push('/admin/service-category');
  };

  let fields: IFieldsProps = {
    title: 'Update ServiceCategory ',
    disabled: false,
    fields: [
        {label: "Name", name: "serviceCategoryName", inputType: "text", placeholder: "Name"},
        {label: "Description", name: "serviceCategoryDescription", inputType: "text", placeholder: "Description"}
    ],
   
    heading: 'Update ServiceCategory',
    data: ServiceCategory,
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

export default ServiceCategoryUpdateForm;