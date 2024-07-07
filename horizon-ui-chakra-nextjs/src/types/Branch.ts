export interface IBranchList
{  
	id: number;
    branchName: string,
    branchPhoneNumber: string,
    emailAddress: string,
    city: string,
    country: string,
	postalCode: string,
    centerName: string
}
export interface IBranch
{ 
    branchName: string,
    branchPhoneNumber: string,
    emailAddress: string,
    address: Address,
}
export interface Address
{
    city: string,
    country: string,
	postalCode: string,
}