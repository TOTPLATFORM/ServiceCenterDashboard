export interface IFeedbackList
{  
	id: number;
    feedbackDescription: string,
    customerName: string,
    product?:{
        productName:string
    },
    service?:{
        serviceName:string
    },
    feedbackDate:Date
}

export interface IFeedback
{ 
    id: number;
    feedbackDescription: string,
    customerId: string,
    productId?:number,
    serviceId?:number
}