export interface IOfferList
{  
	id: number;
    offerName: offerName,
    offerDescription: string,
    startDate: Date,
    endDate: Date,
    discount: number,
    product?:{
        productName:string
    },
    service?:{
        serviceName:string
    }
}
export interface IOffer
{ 
    offerName: offerName,
    offerDescription: string,
    startDate: Date,
    endDate: Date,
    discount: number,
    productId?:number,
    serviceId?:number
}
export enum offerName{
    BuyOneGetOne,
    Sales50Percentange,
    FreeDelivery,
    Voucher
}