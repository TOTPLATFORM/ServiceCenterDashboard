'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { AddService } from 'libs/endpoints/service';
import { IService } from 'types/Service';
import { getEmployee } from 'libs/endpoints/employee';
import { getServiceCategory } from 'libs/endpoints/service-category';
import { GetServicePackage } from 'libs/endpoints/servicePackage';

const ServiceAddForm = () => {
  const [Employee, setEmployee] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Package, setPackage] = useState([]);
  const router = useRouter();

  const fetchEmployee = async () => {
    let employees = await getEmployee();
    setEmployee(employees);
  }

  const fetchCategory = async () => {
    let Category = await getServiceCategory();
    setCategory(Category);
  }

  const fetchPackages = async () => {
    let Package = await GetServicePackage();
    setPackage(Package);
  }

  useEffect(() => {
    fetchEmployee();
    fetchCategory();
    fetchPackages();
}, [])

  const handleSubmit = async (formData: IService) => {
    await AddService(formData);
    router.push('/admin/service');
  };

  let fields: IFieldsProps = {
    title: 'Create Service',
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
    heading: 'Add Service',
    onSubmit: handleSubmit,
  };

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      dropDownLists={fields.dropDownLists}
      heading={fields.heading}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};

export default ServiceAddForm;