'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addCampagin, getCampagin } from "libs/endpoints/campagin";
import { getProduct } from "libs/endpoints/product";
import { enumToArray } from "utils/enumUtils";
import { CampaginStatus } from "types/Campagin";

const AddCampagin = () => {
    const router = useRouter();
    const handleSubmit = async (formData: any) => {
        await addCampagin(formData);
        router.push("/admin/campagin");
    }

    const statusOptions = enumToArray(CampaginStatus);

    let fields: IFieldsProps = {
        title: "Add Campagin",
        disabled: false,
        fields: [
            {label: "Name", name: "campaginName", inputType: "text", placeholder: "Name"},
            {label: "Description", name: "campaginDescription", inputType: "text", placeholder: "Description"},
            {label: "Goals", name: "goals", inputType: "text", placeholder: "Goals"},
            {label: "Gender", name: "gender", inputType: "select", placeholder: "Select Status" , options: statusOptions},            {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
            {label: "End Date", name: "endDate", inputType: "date", placeholder: "End Date"},
            {label: "Budget", name: "budget", inputType: "number", placeholder: "Budget"},
        ],
        heading: "Create Campagin",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
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

export default AddCampagin;
