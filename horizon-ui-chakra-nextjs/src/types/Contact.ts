export interface IContactList
{  
	id: string;
    firstName: string,
    lastName: string,
    email: string,
    gender: Gender,
    city: City,
    country: Country,
	postalCode: string,
    status: string
}
export interface IContact
{ 
    firstName: string,
    lastName: string,
    dateOfBirth:Date,
    email: string,
    phoneNumber : string,
    userName:string,
    password:string,
    gender: Gender,
    address: Address
}
export interface Address
{
    city: City,
    country: Country,
	postalCode: string,
}

export enum Status
{
Lead , 
Oppurtienty,
Cancelled,
Customer
}
export enum Gender {
female , 
male 
}
export enum City
{
    Cairo,
    Giza,
    Monufia,
    Alexandria,
    Sharqia,
    Beheira
}

export enum Country
{
    Egypt,
    Bahrain,
    Canada,
    China,
    France
}