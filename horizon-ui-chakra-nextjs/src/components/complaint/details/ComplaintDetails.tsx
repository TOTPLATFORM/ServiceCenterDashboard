'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IComplaintList } from 'types/Complaint';
import { GetByIdComplaint } from 'libs/endpoints/complaint';

const ComplaintDetails = ({ id }: { id: string }) => {
  const [complaint, setComplaint] = useState<IComplaintList>();

  const router = useRouter();

  const fetchComplaint = async () => {
    setComplaint(await GetByIdComplaint(id));
  };

  useEffect(() => {
    fetchComplaint();
}, [])

  const handleSubmit = async (formData: IComplaintList) => {
    router.push('/admin/complaint');
  };

  let fields: IFieldsProps = {
    title: 'Complaint Details',
    disabled: true,
    fields: [
      { label: 'Complaint Description', name: 'complaintDescription', inputType: 'text', placeholder: 'Complaint Description' },
      { label: 'Complaint Status', name: 'complaintStatus', inputType: 'text', placeholder: 'Complaint Status' },
      {label:"Customer Name",name:"customerName",inputType:"text",placeholder:"Customer Name"},
      {label:"Branch Name",name:"branch.branchName",inputType:"text",placeholder:"Branch Name"},
      {label:"Service Provider Name",name:"serviceProvider.serviceProviderName",inputType:"text",placeholder:"ServiceProvider Name"}
    ],
    heading: 'Back to Complaints',
    data: complaint,
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

export default ComplaintDetails;