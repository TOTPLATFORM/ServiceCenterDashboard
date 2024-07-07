
export interface ISubscriptionList
{
   id : number,
   duration : Date,
   package : {
   packageName : string,
   packagePrice : number,
   },
   customer:{
    gender:gender
   }
}

export interface ISubscriptionById extends ISubscriptionList
{
   packageDescription : string,
   customer:{
      firstName : string,
      phoneNumber:string
      gender:gender
   }
}
export enum gender 
{
   male ,
   female
}