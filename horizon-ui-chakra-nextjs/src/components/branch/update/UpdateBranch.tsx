
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IBranch, IBranchList } from 'types/Branch';
import { getByIdBranch, updateBranch } from 'libs/endpoints/branch';
import { getCenter } from 'libs/endpoints/center';

const BranchUpdateForm = ({ id }: { id: string }) => {
  const [Branch, setBranch] = useState<IBranchList>();
  const [Center, setCenter] = useState([]);
  const router = useRouter();

  const fetchBranch = async () => {
    setBranch(await getByIdBranch(id));
  };

  const fetchCenters = async () => {
    let Centers = await getCenter();
    setCenter(Centers);
    }
    
  useEffect(() => {
    fetchBranch();
    fetchCenters();
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
        centerId: formData.centerId
    }

    await updateBranch(branch, id);
    router.push('/admin/branch');
  };

  let fields: IFieldsProps = {
    title: 'Update Branch ',
    disabled: false,
    fields: [
        {label: "Name", name: "branchName", inputType: "text", placeholder: "Name"},
        {label: "Phone Number", name: "branchPhoneNumber", inputType: "text", placeholder: "Phone Number"},
        {label: "Email Address", name: "emailAddress", inputType: "text", placeholder: "Email Address"},
        {label: "City", name: "city", inputType: "text", placeholder: "City"},
        {label: "country", name: "country", inputType: "text", placeholder: "country"},
        {label: "Postal Code", name: "postalCode", inputType: "text", placeholder: "Postal Code"}
    ],
    dropDownLists: [
        {label: "Center", name: "centerId", placeholder: "Center", value: "id", displayName:"centerName", data: Center },
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
      dropDownLists={fields.dropDownLists}
      heading={fields.heading}
      data={fields.data}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};

export default BranchUpdateForm;