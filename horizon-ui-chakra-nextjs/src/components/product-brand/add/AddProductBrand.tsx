'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addProductBrand, getProductBrand } from "libs/endpoints/product-brand";

const AddProductBrand = () => {
    const [ProductBrand, setProductBrand] = useState([]);
    const router = useRouter();


    const handleSubmit = async (formData: any) => {
        await addProductBrand(formData);
        router.push("/admin/product-brand");
    }

    const fetchProductBrands = async () => {
        let ProductBrands = await getProductBrand();
        setProductBrand(ProductBrands);
    }

    let fields: IFieldsProps = {
        title: "Add ProductBrand",
        disabled: false,
        fields: [
            {label: "Name", name: "brandName", inputType: "text", placeholder: "Name"},
            {label: "Description", name: "brandDescription", inputType: "text", placeholder: "Description"},
            {label: "Country Of Origin", name: "countryOfOrigin", inputType: "text", placeholder: "Country Of Origin"},
            {label: "Founded Year", name: "foundedYear", inputType: "date", placeholder: "Founded Year"}
        ],
        heading: "Create ProductBrand",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
        fetchProductBrands();
      
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

export default AddProductBrand;
