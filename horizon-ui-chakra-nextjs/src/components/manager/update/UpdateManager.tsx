'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IDepartmentList, IDepartment } from 'types/Department';
import { GetByIdDepartment, UpdateDepartment } from 'libs/endpoints/department';
import { GetByIdManager, UpdateManager } from 'libs/endpoints/manager';
import { IManager, IManagerList } from 'types/Manager';

const ManagerUpdateForm = ({ id }: { id: string }) => {

  const [manager, setManager] = useState<IManagerList>();
  const router = useRouter();

  const fetchManager = async () => {
    setManager(await GetByIdManager(id));
  };

  const handleSubmit = async (formData: IManager) => {
    await UpdateManager(formData, id);
    router.push('/admin/manager');
  };

  let fields: IFieldsProps = {
    title: 'Update Manager',
    disabled: false,
    fields: [
      { label: 'Department Name ', name: 'departmentName', inputType: 'text', placeholder: 'Department Name' },
    ],
    
    heading: 'Update Manager',
    data: manager,
    onSubmit: handleSubmit,
  };

  useEffect(() => {
    fetchManager();
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

export default ManagerUpdateForm;