'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { GetByIdManager } from 'libs/endpoints/manager';
import { IManagerList } from 'types/Manager';

const ManagerDetails = ({ id }: { id: string }) => {
  const [department, setDepartment] = useState<IManagerList>();

  const router = useRouter();

  const fetchManager = async () => {
    setDepartment(await GetByIdManager(id));
  };

  useEffect(() => {
    fetchManager();
}, [])

  const handleSubmit = async () => {
    router.push('/admin/manager');
  };

  let fields: IFieldsProps = {
    title: 'Manager Details',
    disabled: true,
    fields: [
      { label: 'Department Name ', name: 'departmentName', inputType: 'text', placeholder: 'Department Name' }
    ],
    heading: 'Back to Manger',
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

export default ManagerDetails;