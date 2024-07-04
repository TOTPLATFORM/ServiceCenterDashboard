'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IServicePackageList } from 'types/ServicePackage';
import { GetByIdServicePackage } from 'libs/endpoints/servicePackage';

const ServicePackageDetails = ({ id }: { id: number }) => {
  const [servicePackage, setServicePackage] = useState<IServicePackageList>();

  const router = useRouter();

  const fetchServicePackage = async () => {
    setServicePackage(await GetByIdServicePackage(id));
  };

  useEffect(() => {
    fetchServicePackage();
}, [])

  const handleSubmit = async (formData: IServicePackageList) => {
    router.push('/admin/servicePackage');
  };

  let fields: IFieldsProps = {
    title: 'ServicePackage Details',
    disabled: true,
    fields: [
      { label: 'Package Name', name: 'packageName', inputType: 'text', placeholder: 'Name' },
      { label: 'Package Description', name: 'packageDescription', inputType: 'text', placeholder: 'Package Description' },
      { label: 'Package Price', name: 'packagePrice', inputType: 'number', placeholder: 'Package Price' },
    ],
    heading: 'Back to Service Packages',
    data: servicePackage,
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

export default ServicePackageDetails;