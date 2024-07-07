
export interface IService{
    serviceName: string,
    serviceDescription: string,
    servicePrice: number,
    avaliable: string,
    serviceCategoryId: number,
}

export interface IServiceList{
    id: number,
    serviceName: string,
    serviceDescription: string,
    servicePrice: number,
    avaliable: string
}