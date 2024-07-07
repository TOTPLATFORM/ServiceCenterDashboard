'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IServicePackageList, IServicePackage } from 'types/ServicePackage';
import { GetByIdServicePackage, UpdateServicePackage } from 'libs/endpoints/servicePackage';
import { GetService } from 'libs/endpoints/service';

const ServicePackageUpdateForm = ({ id }: { id: number }) => {
  const [ServicePackage, setServicePackage] = useState<IServicePackageList>();
  const [Category, setCategory] = useState([]);
  const router = useRouter();

  

  const fetchService = async () => {
    let Category = await GetService();
    setCategory(Category);
  }
  

  const fetchServicePackage = async () => {
    setServicePackage(await GetByIdServicePackage(id));
  };

  
  

  useEffect(() => {
    fetchService();
    fetchServicePackage();
}, [])

  const handleSubmit = async (formData: IServicePackage) => {
    await UpdateServicePackage(formData, id);
    router.push('/admin/servicePackage');
  };

  let fields: IFieldsProps = {
    title: 'ServicePackage Details',
    disabled: false,
    fields: [
      { label: 'Package Name', name: 'packageName', inputType: 'text', placeholder: 'Name' },
      { label: 'Package Description', name: 'packageDescription', inputType: 'text', placeholder: 'Package Description' },
      { label: 'Package Price', name: 'packagePrice', inputType: 'number', placeholder: 'Package Price' },
    ],
    
    heading: 'Update ServicePackage',
    data: ServicePackage,
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

export default ServicePackageUpdateForm;