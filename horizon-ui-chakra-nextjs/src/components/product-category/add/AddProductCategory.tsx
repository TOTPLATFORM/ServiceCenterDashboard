'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addProductCategory, getProductCategory } from "libs/endpoints/product-category";

const AddProductCategory = () => {
    const [ProductCategory, setProductCategory] = useState([]);
    const router = useRouter();


    
    const handleSubmit = async (formData: any) => {
        await addProductCategory(formData);
        router.push("/admin/product-category");
    }

    const fetchProductCategorys = async () => {
        let ProductCategorys = await getProductCategory();
        setProductCategory(ProductCategorys);
    }

    let fields: IFieldsProps = {
        title: "Add ProductCategory",
        disabled: false,
        fields: [
            {label: "Name", name: "categoryName", inputType: "text", placeholder: "Name"}
        ],
        heading: "Create ProductCategory",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
      fetchProductCategorys();
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

export default AddProductCategory;
