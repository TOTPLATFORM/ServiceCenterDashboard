
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IProduct, IProductList } from 'types/Product';
import { getByIdProduct, updateProduct } from 'libs/endpoints/product';
import { getProductBrand } from 'libs/endpoints/product-brand';
import { GetCategory } from 'libs/endpoints/item-category';

const ProductUpdateForm = ({ id }: { id: string }) => {
  const [Product, setProduct] = useState<IProductList>();
  const [Category, setCategory] = useState([]);
  const [Brand, setBrand] = useState([]);
  const router = useRouter();

  const fetchProduct = async () => {
    setProduct(await getByIdProduct(id));
  };

    const fetchCategories = async () => {
        let Category = await GetCategory();
        setCategory(Category);
    }

    const fetchBrands = async () => {
        let Brand = await getProductBrand();
        setBrand(Brand);
    }

    useEffect(() => {
        fetchProduct();
        fetchBrands();
        fetchCategories();
    }, [])

  const handleSubmit = async (formData: IProduct) => {
    await updateProduct(formData, id);
    router.push('/admin/product');
  };

  let fields: IFieldsProps = {
    title: 'Update Product ',
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
    heading: 'Update Product',
    data: Product,
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

export default ProductUpdateForm;