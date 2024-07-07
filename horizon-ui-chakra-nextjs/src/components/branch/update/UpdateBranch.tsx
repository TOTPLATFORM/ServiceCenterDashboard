
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IBranch, IBranchList } from 'types/Branch';
import { getByIdBranch, updateBranch } from 'libs/endpoints/branch';
import { enumToArray } from 'utils/enumUtils';
import { City, Country } from 'types/Contact';

const BranchUpdateForm = ({ id }: { id: number }) => {
  const [Branch, setBranch] = useState<IBranchList>();
  const router = useRouter();

  const fetchBranch = async () => {
    setBranch(await getByIdBranch(id));
  };

 
    
  useEffect(() => {
    fetchBranch();
}, [])

  const handleSubmit = async (formData: any) => {

    let branch: IBranch = {
        branchName: formData.branchName,
        emailAddress: formData.emailAddress,
        branchPhoneNumber: formData.branchPhoneNumber,
        address: {
            city: formData.city,
            country: formData.country,
            postalCode: formData.postalCode
        },
    }

    await updateBranch(branch, id);
    router.push('/admin/branch');
  };

  const cityOptions = enumToArray(City);
    const countryOptions = enumToArray(Country);

  let fields: IFieldsProps = {
    title: 'Update Branch ',
    disabled: false,
    fields: [
        {label: "Name", name: "branchName", inputType: "text", placeholder: "Name"},
        {label: "Phone Number", name: "branchPhoneNumber", inputType: "text", placeholder: "Phone Number"},
        {label: "Email Address", name: "emailAddress", inputType: "text", placeholder: "Email Address"},
        {label: "City", name: "city", inputType: "select",  placeholder: "Select City", options: cityOptions },
        {label: "country", name: "country", inputType: "select", placeholder: "Select Country" , options:countryOptions},
        {label: "Postal Code", name: "postalCode", inputType: "text", placeholder: "Postal Code"}
    ],
  
    heading: 'Update Branch',
    data: Branch,
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

export default BranchUpdateForm;