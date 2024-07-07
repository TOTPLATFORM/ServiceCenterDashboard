'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IServicePackageList } from 'types/ServicePackage';
import { GetByIdServicePackage } from 'libs/endpoints/servicePackage';
import { IServiceList } from 'types/Service';
import { GetService } from 'libs/endpoints/service';
import { AssingServiceToServicePackage } from 'libs/endpoints/service';

const ServicePackageDetails = ({ id }: { id: number }) => {
  const [servicePackage, setServicePackage] = useState<IServicePackageList>();
  const [service, setService] = useState<Array<IServiceList>>([]);
  const router = useRouter();

  const fetchServicePackage = async () => {
    setServicePackage(await GetByIdServicePackage(id));
  };

  const fetchService = async()=>{
   setService(await GetService())
  } 
  
  const assignService = async (formData: any) => {
    const selectedServiceId = formData.serviceName;
    await AssingServiceToServicePackage (selectedServiceId,id);
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
    dropDownLists :[
      {label: "Service", name: "serviceName", placeholder: "Select Service", value: "id", displayName:"serviceName", data: service },

    ],
    heading: 'Assign',
    data: servicePackage,
    onSubmit: assignService,
  };

  useEffect(() => {
    fetchServicePackage();
    fetchService();
}, [])

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      heading={fields.heading}
      data={fields.data}
      dropDownLists={fields.dropDownLists}
      onSubmit={assignService}
    ></CompactForm>
  );
};

export default ServicePackageDetails;