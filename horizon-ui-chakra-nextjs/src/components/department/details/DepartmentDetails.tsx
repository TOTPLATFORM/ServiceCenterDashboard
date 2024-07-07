'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IDepartmentList } from 'types/Department';
import { GetByIdDepartment } from 'libs/endpoints/department';

const DepartmentDetails = ({ id }: { id: number }) => {
  const [department, setDepartment] = useState<IDepartmentList>();

  const router = useRouter();

  const fetchDepartment = async () => {
    setDepartment(await GetByIdDepartment(id));
  };

  useEffect(() => {
    fetchDepartment();
}, [])

  const handleSubmit = async (formData: IDepartmentList) => {
    router.push('/admin/department');
  };

  let fields: IFieldsProps = {
    title: 'Department Details',
    disabled: true,
    fields: [
      { label: 'Department Name ', name: 'departmentName', inputType: 'text', placeholder: 'Department Name' }
    ],
    heading: 'Back to Departments',
    data: department,
    onSubmit: handleSubmit,
  };

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

export default DepartmentDetails;