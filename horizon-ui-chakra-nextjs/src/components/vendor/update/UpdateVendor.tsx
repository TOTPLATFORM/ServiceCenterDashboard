
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IVendor, IVendorList } from 'types/Vendor';
import { getByIdVendor, updateVendor } from 'libs/endpoints/vendor';
import { GetDepartment } from 'libs/endpoints/department';
import { getCenter } from 'libs/endpoints/center';
import { ICenterList } from 'types/Center';

const VendorUpdateForm = ({ id }: { id: string }) => {
  const [Vendor, setVendor] = useState<IVendorList>();
  const [center, setCenter] = useState<ICenterList>();
  const router = useRouter();

  const fetchVendor = async () => {
    setVendor(await getByIdVendor(id));
  };

  const fetchCenter = async () => {
    let centers = await getCenter();
    setCenter(centers);
  }

  useEffect(() => {
    fetchVendor();
    fetchCenter();
}, [])

  const handleSubmit = async (formData: IVendor) => {
    await updateVendor(formData, id);
    router.push('/admin/vendor');
  };

  let fields: IFieldsProps = {
    title: 'Update Vendor ',
    disabled: false,
    fields: [
        {label: "Vendor First Name", name: "vendorFirstName", inputType: "text", placeholder: "Vendor First Name"},
        {label: "Vendor last Name", name: "vendorLastName", inputType: "text", placeholder: "Vendor Last Name"},
        {label: "Vendor Email", name: "vendorEmail", inputType: "text", placeholder: "Vendor Email"},
        {label: "Vendor Phone Number", name: "vendorPhoneNumber", inputType: "text", placeholder: "Vendor Phone Number"},
        {label: "UserName", name: "userName", inputType: "text", placeholder: "UserName"},
        {label: "Gender", name: "gender", inputType: "text", placeholder: "Gender"},
        {label: "Password", name: "password", inputType: "password", placeholder: "Password"},
        {label: "Vendor Type", name: "vendorType", inputType: "text", placeholder: "Vendor Type"},
        {label: "Contact Person", name: "contactPerson", inputType: "text", placeholder: "Contact Person"},
        {label: "Contract Start Date", name: "contractStartDate", inputType: "date", placeholder: "Contract Start Date"},
        {label: "Contract End Date", name: "contractEndDate", inputType: "date", placeholder: "Contract End Date"},
      ],
    heading: 'Update Vendor',
    data: Vendor,
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

export default VendorUpdateForm;