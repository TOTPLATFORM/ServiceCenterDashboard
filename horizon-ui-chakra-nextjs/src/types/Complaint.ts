
export interface IComplaint{
    complaintDescription: string,
    complaintStatus: complaintStatus,
    customerId: string,
    branchId?:string,
    serviceProviderId?:string
}
export interface IComplaintList{
    id: number
    complaintDate: Date,
    complaintDescription: string,
    complaintStatus: complaintStatus,
    customerName:string,
    branch?:{
        branchName:string,
    }
    serviceprovider?:{
        firstName:string,
        lastName:string
    }
}
export enum complaintStatus{
    Pending,
   Approved,
   Cancelled,
   Resolved
}