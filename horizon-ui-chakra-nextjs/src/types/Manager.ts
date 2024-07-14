import { Gender } from "./gender"

export interface IManager{
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    gender: string,
    phoneNumber: string,
    email: string,
    departmentId: number,
    baseSalary: number,
    userName: string,
    password: string,
    responsibilities: string,
    hiringDate: Date,
    workingHours: number,
    experience: number,
    branchId: number
  }

  export interface IManagerList{
    id:string,
    email: string,
    firstName: string,
    lastName: string,
    dateOfBirth:Date,
    gender: Gender,
    phoneNumber: string,
    departmentName: string,
    responsibilities: string,
    hiringDate: Date,
    workingHours: number,
    experience: number,
    branchName: string
  }



