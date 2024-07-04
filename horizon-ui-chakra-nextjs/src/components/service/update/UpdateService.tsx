'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IServiceList, IService } from 'types/Service';
import { GetByIdService, UpdateService } from 'libs/endpoints/service';
import { getEmployee } from 'libs/endpoints/employee';
import { getServiceCategory } from 'libs/endpoints/service-category';

const ServiceUpdateForm = ({ id }: { id: number }) => {
  const [Service, setService] = useState<IServiceList>();
  const [Category, setCategory] = useState([]);
  const [Package, setPackage] = useState([]);
  const router = useRouter();

 
  const fetchCategory = async () => {
    let Category = await getServiceCategory();
    setCategory(Category);
  }

  const fetchPackages = async () => {
    let Package = await getEmployee();
    setPackage(Package);
  }


  const fetchService = async () => {
    setService(await GetByIdService(id));
  };

  
  

  useEffect(() => {
    fetchCategory();
    fetchPackages();
    fetchService();
}, [])

  const handleSubmit = async (formData: IService) => {
    await UpdateService(formData, id);
    router.push('/admin/service');
  };

  let fields: IFieldsProps = {
    title: 'Service Details',
    disabled: false,
    fields: [
      { label: 'Service Name', name: 'serviceName', inputType: 'text', placeholder: 'Name' },
      { label: 'Service Description', name: 'serviceDescription', inputType: 'text', placeholder: 'Service Description' },
      { label: 'Service Price', name: 'servicePrice', inputType: 'number', placeholder: 'Service Price' },
      { label: 'Avaliability', name: 'avaliable', inputType: 'text', placeholder: 'Avaliability' },
    ],
    dropDownLists:[
      {label: "Service Category", name: "serviceCategoryId", placeholder: "Category", value: "id", displayName: "serviceCategoryName", data: Category},
      ],
    heading: 'Update Service',
    data: Service,
    onSubmit: handleSubmit,
  };

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

export default ServiceUpdateForm;