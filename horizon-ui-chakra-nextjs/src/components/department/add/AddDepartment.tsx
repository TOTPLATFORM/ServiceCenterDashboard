'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { AddDepartment } from 'libs/endpoints/department';
import { IDepartment } from 'types/Department';
import { getCenter } from 'libs/endpoints/center';
import {  ICenterList } from 'types/Center';

const DepartmentAddForm = () => {
  const [Center, setCenter] = useState<ICenterList>();
  const router = useRouter();

  const fetchCenter = async () => {
    let centers = await getCenter();
    setCenter(centers);
  }

  useEffect(() => {
    fetchCenter();
}, [])

  const handleSubmit = async (formData: IDepartment) => {
    await AddDepartment(formData);
    router.push('/admin/department');
  };

  let fields: IFieldsProps = {
    title: 'Create Department',
    disabled: false,
    fields: [
      { label: 'Department Name ', name: 'departmentName', inputType: 'text', placeholder: 'Department Name' },
    ],
    heading: 'Add Department',
    onSubmit: handleSubmit,
  };

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      dropDownLists={fields.dropDownLists}
      heading={fields.heading}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};

export default DepartmentAddForm;