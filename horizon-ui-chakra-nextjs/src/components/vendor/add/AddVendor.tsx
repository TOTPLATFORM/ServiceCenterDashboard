'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addVendor } from "libs/endpoints/vendor";
import { getCenter } from "libs/endpoints/center";
import { ICenterList } from "types/Center";

const AddVendor = () => {
    const [center, setCenter] = useState<ICenterList>();
    const router = useRouter();

    const handleSubmit = async (formData: any) => {
        await addVendor(formData);
        router.push("/admin/vendor");
    }

    const fetchCenter = async () => {
        let centers = await getCenter();
        setCenter(centers);
      }

    let fields: IFieldsProps = {
        title: "Add Vendor",
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
          dropDownLists: [
            {label: "Center", name: "centerId", placeholder: "Center", value: "id", displayName:"centerName", data: center },
          ],
        heading: "Create Vendor",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
        fetchCenter();
    },[]);

      return (
        <CompactForm
        title={fields.title}
        disabled={fields.disabled}
        fields={fields.fields} 
        heading={fields.heading}
        data={fields.data}
        dropDownLists={fields.dropDownLists}
        onSubmit={handleSubmit}>
        </CompactForm>
      
    )

}

export default AddVendor;
function GetCenter() {
  throw new Error("Function not implemented.");
}

