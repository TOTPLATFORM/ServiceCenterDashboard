
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  IProductCategoryList } from 'types/ProductCategory';
import { useRouter } from 'next/navigation';
import { AssingProductCategoryToProductBrand, getByIdProductCategory } from 'libs/endpoints/product-category';
import { IProductBrandList } from 'types/ProductBrand';
import { getProductBrand } from 'libs/endpoints/product-brand';

const ProductCategoryDetails = ({ id }: { id: number }) => {
  const [ProductCategory, setProductCategory] = useState<IProductCategoryList>();
  const [productBrand, setProductBrand] = useState<Array<IProductBrandList>>([]);
  const router = useRouter();

  const fetchProductCategory = async () => {
    setProductCategory(await getByIdProductCategory(id));
  };

 const fetchProductBrand = async()=>{
     setProductBrand(await getProductBrand())
     console.log(JSON.stringify(setProductBrand));
     
 }
  useEffect(() => {
    fetchProductCategory();
    fetchProductBrand();
   }, [])

  const handleSubmit = async (formData: any) => {
    let selectedBrandId =  formData.brandName;
    await AssingProductCategoryToProductBrand(selectedBrandId, id);
    router.push('/admin/product-category');
  };

  let fields: IFieldsProps = {
    title: 'ProductCategory Details',
    disabled: true,
    fields: [
        {label: "Name", name: "categoryName", inputType: "text", placeholder: "Name"}
        ],
        dropDownLists :[
          {label: "Brand", name: "brandName", placeholder: "Select Brand", value: "id", displayName:"brandName", data: productBrand },

        ],

    heading: 'Assign Brand',
    data: ProductCategory,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchProductCategory();
  }, []);

  return (
    <CompactForm
      title={fields.title}
      disabled={fields.disabled}
      fields={fields.fields}
      heading={fields.heading}
      data={fields.data}
      dropDownLists={fields.dropDownLists}
      onSubmit={handleSubmit}
    ></CompactForm>
  );
};




export default ProductCategoryDetails;
function AssignProductCategoryToProductBrand(id: string, id1: number) {
  throw new Error('Function not implemented.');
}

