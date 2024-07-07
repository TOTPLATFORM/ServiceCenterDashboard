
export interface ISubscriptionList
{
   id : number,
   duration : Date,
   package : {
    PackageName : string,
   packagePrice : number,
   },
   contact: {
    gender : gender
   },   
}

export interface ISubscriptionById extends ISubscriptionList
{
   packageDescription : string,
   contact: {
    firstName : string,
    whatshappNumber:number,
    gender:gender,
   },  

}

export enum gender 
{
    male ,
    female
}