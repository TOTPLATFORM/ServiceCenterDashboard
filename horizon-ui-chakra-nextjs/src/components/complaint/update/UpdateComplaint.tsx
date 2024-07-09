'use client';

import { useState, useEffect } from 'react';
import CompactForm, {
  IFieldsProps,
} from 'components/common/compact-form/CompactForm';
import { useRouter } from 'next/navigation';
import { IComplaintList, IComplaint, complaintStatus } from 'types/Complaint';
import { GetByIdComplaint, UpdateComplaint } from 'libs/endpoints/complaint';
import { getCustomer } from 'libs/endpoints/customer';
import { enumToArray } from 'utils/enumUtils';

const ComplaintUpdateForm = ({ id }: { id: string }) => {
  const [Complaint, setComplaint] = useState<IComplaintList>();
  const [Customer, setCustomer] = useState([]);

  const router = useRouter();

  const fetchComplaint = async () => {
    setComplaint(await GetByIdComplaint(id));
  };

  const fetchCustomer = async () => {
    let customers = await getCustomer();
    setCustomer(customers);
  }

  useEffect(() => {
    fetchCustomer();
    fetchComplaint();
}, [])

const complaintStatusOptions = enumToArray(complaintStatus);

  const handleSubmit = async (formData:  complaintStatus) => {
    await UpdateComplaint(formData, id);
    router.push('/admin/complaint');
  };

  let fields: IFieldsProps = {
    title: 'Complaint Details',
    disabled: false,
    fields: [
      { label: 'Complaint Status', name: 'complaintStatus', inputType: 'select',options:complaintStatusOptions, placeholder: 'Complaint Status' },
    ],
   
    heading: 'Update Complaint',
    data: Complaint,
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

export default ComplaintUpdateForm;