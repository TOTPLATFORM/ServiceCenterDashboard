'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IDepartmentList, IDepartment } from 'types/Department';
import { GetByIdDepartment, UpdateDepartment } from 'libs/endpoints/department';

const DepartmentUpdateForm = ({ id }: { id: number }) => {

  const [Department, setDepartment] = useState<IDepartmentList>();
  const router = useRouter();

  const fetchDepartment = async () => {
    setDepartment(await GetByIdDepartment(id));
  };

  const handleSubmit = async (formData: IDepartment) => {
    await UpdateDepartment(formData, id);
    router.push('/admin/department');
  };

  let fields: IFieldsProps = {
    title: 'Update Department',
    disabled: false,
    fields: [
      { label: 'Department Name ', name: 'departmentName', inputType: 'text', placeholder: 'Department Name' },
    ],
    
    heading: 'Update Department',
    data: Department,
    onSubmit: handleSubmit,
  };

  useEffect(() => {
    fetchDepartment();
}, [])

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

export default DepartmentUpdateForm;