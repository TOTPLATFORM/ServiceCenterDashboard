
export interface IRatingService{
    ratingValue: number,
    customerId: string,
    productId?:number,
    serviceId?:number
}

export interface IRatingServiceList{
    id: number,
    ratingValue: number,
    customerName: string,
    product?:{
        productName:string
    },
    service?:{
        serviceName:string
    },
   
}