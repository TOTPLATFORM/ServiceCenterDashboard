'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { AddServicePackage } from 'libs/endpoints/servicePackage';
import { IServicePackage } from 'types/ServicePackage';
import { GetService } from 'libs/endpoints/service';

const ServicePackageAddForm = () => {
  const [service, setService] = useState([]);
  const router = useRouter();

  

  const fetchService = async () => {
    let services = await GetService();
    setService(services);
  }

  

  useEffect(() => {
    
    fetchService();
}, [])

  const handleSubmit = async (formData: IServicePackage) => {
    await AddServicePackage(formData);
    router.push('/admin/servicePackage');
  };

  let fields: IFieldsProps = {
    title: 'Create ServicePackage',
    disabled: false,
    fields: [
      { label: 'Package Name', name: 'packageName', inputType: 'text', placeholder: 'Name' },
      { label: 'Package Description', name: 'packageDescription', inputType: 'text', placeholder: 'Package Description' },
      { label: 'Package Price', name: 'packagePrice', inputType: 'number', placeholder: 'Package Price' },
    ],
    heading: 'Add ServicePackage',
    onSubmit: handleSubmit,
  };

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      heading={fields.heading}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};

export default ServicePackageAddForm;