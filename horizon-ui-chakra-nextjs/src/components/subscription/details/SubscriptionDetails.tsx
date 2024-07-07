'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { ISubscriptionById, ISubscriptionList } from 'types/Subscription';
import { GetByIdSubscription } from 'libs/endpoints/subscription';

const SubscriptionDetails = ({ id }: { id: number }) => {
  const [subscription, setSubscription] = useState<ISubscriptionById>();

  const router = useRouter();

  const fetchService = async () => {
    setSubscription(await GetByIdSubscription(id));
  };

  useEffect(() => {
    fetchService();
}, [])

  const handleSubmit = async (formData: ISubscriptionList) => {
    router.push('/admin/subscription');
  };

  let fields: IFieldsProps = {
    title: 'Subscription Details',
    disabled: true,
    fields: [
      { label: 'Duration', name: 'duration', inputType: 'text', placeholder: 'Duration' },
      { label: 'Package Name', name: 'package.packageName', inputType: 'text', placeholder: 'Package Name' },
      { label: 'Package Price', name: 'package.packagePrice', inputType: 'text', placeholder: 'Package Price' },
      { label: 'First Name', name: 'customer.firstName', inputType: 'text', placeholder: 'First Name' },
      { label: 'phoneNumber', name: 'customer.phoneNumber', inputType: 'text', placeholder: 'phoneNumber' },
      { label: 'Gender', name: 'customer.gender', inputType: 'text', placeholder: 'Gender' },
    ],
    heading: 'Back to Subscription',
    data: subscription,
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

export default SubscriptionDetails;