
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IProductBrand, IProductBrandList } from 'types/ProductBrand';
import { getByIdProductBrand, updateProductBrand } from 'libs/endpoints/product-brand';

const ProductBrandUpdateForm = ({ id }: { id: number }) => {
  const [ProductBrand, setProductBrand] = useState<IProductBrandList>();

  const router = useRouter();

  const fetchProductBrand = async () => {
    setProductBrand(await getByIdProductBrand(id));
  };  

  useEffect(() => {
    fetchProductBrand();
}, [])

  const handleSubmit = async (formData: IProductBrand) => {
    await updateProductBrand(formData, id);
    router.push('/admin/product-brand');
  };

  let fields: IFieldsProps = {
    title: 'Update ProductBrand ',
    disabled: false,
    fields: [
        {label: "Name", name: "brandName", inputType: "text", placeholder: "Name"},
        {label: "Description", name: "brandDescription", inputType: "text", placeholder: "Description"},
        {label: "Country Of Origin", name: "countryOfOrigin", inputType: "text", placeholder: "Country Of Origin"},
        {label: "Founded Year", name: "foundedYear", inputType: "date", placeholder: "Founded Year"}
    ],
   
    heading: 'Update ProductBrand',
    data: ProductBrand,
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

export default ProductBrandUpdateForm;