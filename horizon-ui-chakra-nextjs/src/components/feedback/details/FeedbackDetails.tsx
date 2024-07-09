
'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import {  IFeedbackList } from 'types/Feedback';
import { useRouter } from 'next/navigation';
import { getByIdFeedback } from 'libs/endpoints/feedback';

const FeedbackDetails = ({ id }: { id: string }) => {
  const [Feedback, setFeedback] = useState<IFeedbackList>();
 
  const router = useRouter();

  const fetchFeedback = async () => {
    setFeedback(await getByIdFeedback(id));
  };

 
  useEffect(() => {
    fetchFeedback();
   }, [])

  const handleSubmit = async (formData: IFeedbackList) => {
    router.push('/admin/feedback');
  };

  let fields: IFieldsProps = {
    title: 'Feedback Details',
    disabled: true,
    fields: [
      {label: "Description", name: "feedbackDescription", inputType: "text", placeholder: "Description"},
      {label:"Customer Name",name:"customerName",inputType:"text",placeholder:"Customer Name"},
      {label:"Product Name",name:"product.productName",inputType:"text",placeholder:"Product Name"},
      {label:"Service Name",name:"service.serviceName",inputType:"text",placeholder:"Service Name"}
    
    ],
    heading: 'Back to Feedbacks',
    data: Feedback,
    onSubmit: handleSubmit,
  };


  useEffect(() => {
    fetchFeedback();
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




export default FeedbackDetails;
