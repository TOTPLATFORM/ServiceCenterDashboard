'use client'
import React, {useState, useEffect } from "react";
import CompactForm, { IFieldsProps } from "components/common/compact-form/CompactForm";
import { useRouter } from 'next/navigation';
import { addOffer, getOffer } from "libs/endpoints/offer";
import { getProduct } from "libs/endpoints/product";
import { IProductList } from "types/Product";
import { offerName } from "types/Offer";
import { enumToArray } from "utils/enumUtils";
import { GetService } from "libs/endpoints/service";
import { IServiceList } from "types/Service";

const AddOffer = () => {
 //   const [Offer, setOffer] = useState([]);
    const [Products, setProducts] = useState<Array<IProductList>>();
    const [Services, setServices] = useState<Array<IServiceList>>();
    const router = useRouter();
    const handleSubmit = async (formData: any) => {
        await addOffer(formData);
        router.push("/admin/offer");
    }

    // const fetchOffers = async () => {
    //     let Offers = await getOffer();
    //     setOffer(Offers);
    // }

    const fetchProducts = async () => {
        let Product = await getProduct();
        setProducts(Product);
        console.log(JSON.stringify(setProducts));
        
    }
    const fetchServices = async () => {
        let service = await GetService();
        setServices(service);
        console.log(JSON.stringify(setServices));
        
    }
    const offerNameOptions = enumToArray(offerName);
    let fields: IFieldsProps = {
        title: "Add Offer",
        disabled: false,
        fields: [
            { label: 'Offer Name', name: 'offerName', inputType: 'select',options:offerNameOptions, placeholder: 'Offer Name' },    
            {label: "Description", name: "offerDescription", inputType: "text", placeholder: "Description"},
            {label: "Start Date", name: "startDate", inputType: "date", placeholder: "Start Date"},
            {label: "End Date", name: "endDate", inputType: "date", placeholder: "End Date"},
            {label: "Discount", name: "discount", inputType: "number", placeholder: "Discount"},
        ],
        dropDownLists: [
            {label: "Product", name: "productId", placeholder: "Select Product", value: "id", displayName: "productName", data: Products},
            {label: "Service", name: "serviceId", placeholder: "Select Service", value: "id", displayName: "serviceName", data: Services},
        ],
        heading: "Create Offer",
        onSubmit: handleSubmit,
       
      }

      useEffect(() => {
       // fetchOffers();
        fetchProducts();
        fetchServices();
    },[]);

      return (
        <CompactForm
        title={fields.title}
        disabled={fields.disabled}
        fields={fields.fields} 
        heading={fields.heading}
        data={fields.data}
        dropDownLists={fields.dropDownLists}
        onSubmit={handleSubmit}>
        </CompactForm>
      
    )

}

export default AddOffer;
