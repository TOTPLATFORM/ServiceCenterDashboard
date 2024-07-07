
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  IProductBrandList } from 'types/ProductBrand';
import { useRouter } from 'next/navigation';
import { getByIdProductBrand } from 'libs/endpoints/product-brand';

const ProductBrandDetails = ({ id }: { id: number }) => {
  const [ProductBrand, setProductBrand] = useState<IProductBrandList>();
 
  const router = useRouter();

  const fetchProductBrand = async () => {
    setProductBrand(await getByIdProductBrand(id));
  };

 
  useEffect(() => {
    fetchProductBrand();
   }, [])

  const handleSubmit = async (formData: IProductBrandList) => {
    router.push('/admin/developer');
  };

  let fields: IFieldsProps = {
    title: 'ProductBrand Details',
    disabled: true,
    fields: [
        {label: "Name", name: "brandName", inputType: "text", placeholder: "Name"},
        {label: "Description", name: "brandDescription", inputType: "text", placeholder: "Description"},
        {label: "Country Of Origin", name: "countryOfOrigin", inputType: "text", placeholder: "Country Of Origin"},
        {label: "Founded Year", name: "foundedYear", inputType: "date", placeholder: "Founded Year"}
    ],
    heading: 'Back to ProductBrands',
    data: ProductBrand,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchProductBrand();
  }, []);

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




export default ProductBrandDetails;
