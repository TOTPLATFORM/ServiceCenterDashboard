import { IEmployee, IEmployeeList } from 'types/Employee';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Employee`;

/**
 * retrieves a list of Employee from the api.
 * @returns a promise resolving to an array of Employee objects.
 */
export async function getEmployee(): Promise<IEmployeeList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Employees = data.value;
  return Employees;
}
/**
 * deletes an Employee from the database by id.
 * @param id - the id of the Employee to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteEmployee(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Employee's information by id.
 * @param id - the id of the Employee to retrieve.
 * @returns a promise resolving to an Employee object.
 */
export async function getByIdEmployee(id: string): Promise<IEmployeeList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Employees = data.value;
  return Employees;
}
/**
 * updates an existing Employee's information.
 * @param BodyData - the updated Employee data.
 * @param id - the id of the Employee to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateEmployee(BodyData: IEmployee, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Employee to the database.
 * @param BodyData - the Employee data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addEmployee(BodyData: IEmployee): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}