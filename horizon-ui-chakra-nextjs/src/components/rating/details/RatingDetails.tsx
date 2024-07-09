'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IRatingServiceList } from 'types/Rating';
import { GetByIdRatingService } from 'libs/endpoints/rating';

const RatingServiceDetails = ({ id }: { id: string }) => {
  const [ratingService, setRatingService] = useState<IRatingServiceList>();

  const router = useRouter();

  const fetchRatingService = async () => {
    setRatingService(await GetByIdRatingService(id));
  };

  useEffect(() => {
    fetchRatingService();
}, [])

  const handleSubmit = async (formData: IRatingServiceList) => {
    router.push('/admin/rating');
  };

  let fields: IFieldsProps = {
    title: 'Rating Details',
    disabled: true,
    fields: [
      { label: 'Rating Value', name: 'ratingValue', inputType: 'number', placeholder: 'Rate Value' },
      {label:"Customer Name",name:"customerName",inputType:"text",placeholder:"Customer Name"},
      {label:"Product Name",name:"product.productName",inputType:"text",placeholder:"Product Name"},
      {label:"Service Name",name:"service.serviceName",inputType:"text",placeholder:"Service Name"}
    ],
    heading: 'Back to Rating',
    data: ratingService,
    onSubmit: handleSubmit,
  };

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

export default RatingServiceDetails;