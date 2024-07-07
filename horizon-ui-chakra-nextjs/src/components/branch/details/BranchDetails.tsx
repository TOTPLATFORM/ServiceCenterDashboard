
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  IBranchList } from 'types/Branch';
import { useRouter } from 'next/navigation';
import { getByIdBranch } from 'libs/endpoints/branch';

const BranchDetails = ({ id }: { id: number }) => {
  const [Branch, setBranch] = useState<IBranchList>();
 
  const router = useRouter();

  const fetchBranch = async () => {
    setBranch(await getByIdBranch(id));
  };

 
  useEffect(() => {
    fetchBranch();
   }, [])

  const handleSubmit = async (formData: IBranchList) => {
    router.push('/admin/branch');
  };

  let fields: IFieldsProps = {
    title: 'Branch Details',
    disabled: true,
    fields: [
        {label: "Name", name: "branchName", inputType: "text", placeholder: "Name"},
        {label: "Phone Number", name: "branchPhoneNumber", inputType: "text", placeholder: "Phone Number"},
        {label: "Email Address", name: "emailAddress", inputType: "text", placeholder: "Email Address"},
        {label: "City", name: "city", inputType: "text", placeholder: "City"},
        {label: "country", name: "country", inputType: "text", placeholder: "country"},
        {label: "Postal Code", name: "postalCode", inputType: "text", placeholder: "Postal Code"}
    ],
    heading: 'Back to Branchs',
    data: Branch,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchBranch();
  }, []);

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




export default BranchDetails;
