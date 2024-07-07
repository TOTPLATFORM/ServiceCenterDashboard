'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addProduct } from "libs/endpoints/product";
import { getProductBrand } from "libs/endpoints/product-brand";
import { getProductCategory } from "libs/endpoints/product-category";

const AddProduct = () => {
    const [Category, setCategory] = useState([]);
    const [Brand, setBrand] = useState([]);
    const router = useRouter();
    const handleSubmit = async (formData: any) => {
        await addProduct(formData);
        router.push("/admin/product");
    }

    const fetchCategories = async () => {
        let Category = await getProductCategory();
        setCategory(Category);
    }

    const fetchBrands = async () => {
        let Brand = await getProductBrand();
        setBrand(Brand);
    }

    let fields: IFieldsProps = {
        title: "Add Product",
        disabled: false,
        fields: [
            {label: "Name", name: "productName", inputType: "text", placeholder: "Name"},
            {label: "Description", name: "productDescription", inputType: "text", placeholder: "Description"},
            {label: "Price", name: "productPrice", inputType: "number", placeholder: "Price"}
        ],
        dropDownLists:[
            {label: "Category", name: "productCategoryId", placeholder: "Category", value: "id", displayName: "categoryName", data: Category},
            {label: "Brand", name: "productBrandId", placeholder: "Brand", value: "id", displayName: "brandName", data: Brand},
         ],
        heading: "Create Product",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
        fetchCategories();
        fetchBrands();
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

export default AddProduct;
function GetProductCategory() {
    throw new Error("Function not implemented.");
}

