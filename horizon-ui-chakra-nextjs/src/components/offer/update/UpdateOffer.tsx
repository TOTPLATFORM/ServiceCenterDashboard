
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IOffer, IOfferList, offerName } from 'types/Offer';
import { getByIdOffer, updateOffer } from 'libs/endpoints/offer';
import { getProduct } from 'libs/endpoints/product';
import { enumToArray } from 'utils/enumUtils';
import { IServiceList } from 'types/Service';
import { IProductList } from 'types/Product';
import { GetService } from 'libs/endpoints/service';

const OfferUpdateForm = ({ id }: { id: string }) => {
  const [Offer, setOffer] = useState<IOfferList>();
  const [Products, setProducts] = useState<Array<IProductList>>();  
  const [Services, setServices] = useState<Array<IServiceList>>();
  const router = useRouter();

  const fetchOffer = async () => {
    setOffer(await getByIdOffer(id));
  };

  const fetchProducts = async () => {
    let Product = await getProduct();
    setProducts(Product);
  }
  const fetchServices = async () => {
    let service = await GetService();
    setServices(service);
    console.log(JSON.stringify(setServices));
    
}
const offerNameOptions = enumToArray(offerName);

  useEffect(() => {
    fetchOffer();
    fetchProducts();
}, [])

  const handleSubmit = async (formData: IOffer) => {
    await updateOffer(formData, id);
    router.push('/admin/offer');
  };

  let fields: IFieldsProps = {
    title: 'Update Offer ',
    disabled: false,
    fields: [
      { label: 'Offer Name', name: 'offerName', inputType: 'select',options:offerNameOptions, placeholder: 'Offer Name' },
      {label: "Description", name: "offerDescription", inputType: "text", placeholder: "Description"},
      {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
      {label: "End Date", name: "endDate", inputType: "date", placeholder: "End Date"},
      {label: "Discount", name: "discount", inputType: "number", placeholder: "Discount"},
  ],
  dropDownLists: [
      {label: "Product Name", name: "productId", displayName: "productName", placeholder: "Product Name", value: "id", data: Products},
      {label: "Service", name: "serviceId", placeholder: "Select Service", value: "id", displayName: "serviceName", data: Services},
  ],
    heading: 'Update Offer',
    data: Offer,
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

export default OfferUpdateForm;