export interface ICampaginList
{  
	id: number;
    campaginName: string,
    campaginDescription: string,
    startDate: Date,
    endDate: Date,
    budget: number,
    goals: string,
    status: CampaginStatus
}
export interface ICampagin
{ 
    campaginName: string,
    campaginDescription: string,
    startDate: Date,
    endDate: Date,
    budget: number,
    goals: string,
    status: CampaginStatus
}

export enum CampaginStatus {
   Active,
   Planned,
   Completed,
   OnHold, 
   Cancelled
} 