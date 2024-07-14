
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  IOfferList } from 'types/Offer';
import { useRouter } from 'next/navigation';
import { getByIdOffer } from 'libs/endpoints/offer';

const OfferDetails = ({ id }: { id: string }) => {
  const [Offer, setOffer] = useState<IOfferList>();
 
  const router = useRouter();

  const fetchOffer = async () => {
    setOffer(await getByIdOffer(id));
  };

 
  useEffect(() => {
    fetchOffer();
   }, [])

  const handleSubmit = async (formData: IOfferList) => {
    router.push('/admin/developer');
  };

  let fields: IFieldsProps = {
    title: 'Offer Details',
    disabled: true,
    fields: [
      {label: "Name", name: "offerName", inputType: "text", placeholder: "Name"},
      {label: "Description", name: "offerDescription", inputType: "text", placeholder: "Description"},
      {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
      {label: "End Date", name: "endDate", inputType: "date", placeholder: "End Date"},
      {label: "Discount", name: "discount", inputType: "number", placeholder: "Discount"},
      {label:"Product Name",name:"product.productName",inputType:"text",placeholder:"Product Name"},
      {label:"Service Name",name:"service.serviceName",inputType:"text",placeholder:"Service Name"}
    ],
    heading: 'Back to Offers',
    data: Offer,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchOffer();
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




export default OfferDetails;
