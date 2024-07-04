'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addCenter, getCenter } from "libs/endpoints/center";
import { ICenterList } from "types/Center";

const AddCenter = () => {
    const [Center, setCenter] = useState<ICenterList>();
    const router = useRouter();


    const handleSubmit = async (formData: any) => {
        await addCenter(formData);
        router.push("/admin/center");
    }

    const fetchCenters = async () => {
        let centers = await getCenter();
        setCenter(centers);
    }

    let fields: IFieldsProps = {
        title: "Add Center",
        disabled: false,
        fields: [
            {label: "Name", name: "centerName", inputType: "text", placeholder: "Name"},
            {label: "Opening Hours", name: "openingHours", inputType: "number", placeholder: "Opening Hours"},
            {label: "Specialty", name: "specialty", inputType: "text", placeholder: "Specialty"}
        ],
        data:Center,
        heading: "Create Center",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
        fetchCenters();
      
    },[]);

      return (
        <CompactForm
        title={fields.title}
        disabled={fields.disabled}
        fields={fields.fields} 
        heading={fields.heading}
        data={fields.data}
        onSubmit={handleSubmit}>
        </CompactForm>
      
    )

}

export default AddCenter;
