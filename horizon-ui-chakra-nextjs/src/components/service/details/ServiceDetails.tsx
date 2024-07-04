'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IServiceList } from 'types/Service';
import { GetByIdService } from 'libs/endpoints/service';

const ServiceDetails = ({ id }: { id: number }) => {
  const [service, setService] = useState<IServiceList>();

  const router = useRouter();

  const fetchService = async () => {
    setService(await GetByIdService(id));
  };

  useEffect(() => {
    fetchService();
}, [])

  const handleSubmit = async (formData: IServiceList) => {
    router.push('/admin/service');
  };

  let fields: IFieldsProps = {
    title: 'Service Details',
    disabled: true,
    fields: [
      { label: 'Service Name', name: 'serviceName', inputType: 'text', placeholder: 'Name' },
      { label: 'Service Description', name: 'serviceDescription', inputType: 'text', placeholder: 'Service Description' },
      { label: 'Service Price', name: 'servicePrice', inputType: 'number', placeholder: 'Service Price' },
      { label: 'Avaliability', name: 'avaliable', inputType: 'text', placeholder: 'Avaliability' },
      { label: 'Category Name', name: 'serviceCategoryName', inputType: 'text', placeholder: 'CategoryName' },
      { label: 'Employee Name', name: 'employeeName', inputType: 'text', placeholder: 'employeeName' },
    ],
    heading: 'Back to Services',
    data: service,
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

export default ServiceDetails;