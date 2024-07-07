
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IProductCategory, IProductCategoryList } from 'types/ProductCategory';
import { getByIdProductCategory, updateProductCategory } from 'libs/endpoints/product-category';

const ProductCategoryUpdateForm = ({ id }: { id: number }) => {
  const [ProductCategory, setProductCategory] = useState<IProductCategoryList>();

  const router = useRouter();

  const fetchProductCategory = async () => {
    setProductCategory(await getByIdProductCategory(id));
  };  

  useEffect(() => {
    fetchProductCategory();
}, [])

  const handleSubmit = async (formData: IProductCategory) => {
    await updateProductCategory(formData, id);
    router.push('/admin/product-category');
  };

  let fields: IFieldsProps = {
    title: 'Update ProductCategory ',
    disabled: false,
    fields: [
        {label: "Name", name: "categoryName", inputType: "text", placeholder: "Name"},
    ],
   
    heading: 'Update ProductCategory',
    data: ProductCategory,
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

export default ProductCategoryUpdateForm;