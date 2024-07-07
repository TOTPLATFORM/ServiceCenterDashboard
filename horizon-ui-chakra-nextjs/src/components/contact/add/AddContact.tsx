'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addContact, getContact } from "libs/endpoints/contact";
import { City, Country, Gender, IContact } from "types/Contact";
import { enumToArray } from "utils/enumUtils";

const AddContact = () => {
    const router = useRouter();
    const handleSubmit = async (formData: any) => {

        let contact: IContact = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            gender: formData.gender,
            email: formData.email,
            address: {
                city: formData.city,
                country: formData.country,
                postalCode: formData.postalCode
            },
            password : formData.password,
            phoneNumber : formData.phoneNumber,
            userName: formData.userName,
            dateOfBirth : formData.dateOfBirth
        }

        await addContact(contact);
        router.push("/admin/contact");
    }

    const cityOptions = enumToArray(City);
    const countryOptions = enumToArray(Country);
    const genderOptions = enumToArray(Gender);

    let fields: IFieldsProps = {
        title: "Add Contact",
        disabled: false,
        fields: [
            {label: "First Name", name: "firstName", inputType: "text", placeholder: "First Name"},
            {label: "Last Name", name: "lastName", inputType: "text", placeholder: "Last Name"},
            {label: "Email Address", name: "email", inputType: "email", placeholder: "Email Address"},
            {label: "Phone Number", name: "phoneNumber", inputType: "text", placeholder: "Phone Number"},
            {label: "DateOfBirth", name: "dateOfBirth", inputType: "date", placeholder: "DateOfBirth"},
            {label: "Password", name: "password", inputType: "text", placeholder: "Password"},
            {label: "UserName", name: "userName", inputType: "text", placeholder: "UserName"},
            {label: "Gender", name: "gender", inputType: "select", placeholder: "Select Gender" , options: genderOptions},
            {label: "City", name: "city", inputType: "select",  placeholder: "Select City", options: cityOptions },
            {label: "country", name: "country", inputType: "select", placeholder: "Select Country" , options:countryOptions},
            {label: "Postal Code", name: "postalCode", inputType: "text", placeholder: "Postal Code"}
        ],

        heading: "Create Contact",
        onSubmit: handleSubmit,
      }

      useEffect(() => {
    },[]);

      return (
        <CompactForm
        title={fields.title}
        disabled={fields.disabled}
        fields={fields.fields} 
        heading={fields.heading}
        data={fields.data}
        onSubmit={handleSubmit}>
        </CompactForm>
      
    )

}

export default AddContact;
