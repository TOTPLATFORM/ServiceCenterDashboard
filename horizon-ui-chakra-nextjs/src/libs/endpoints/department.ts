import {IDepartment, IDepartmentList}  from 'types/Department';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/Department`;

/**
 * Retrieves a list of departments from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetDepartment(): Promise<IDepartmentList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let departments = data.value.data;
  return departments;
}

/**
 * Adds a new Department to the database.
 * @param BodyData - The Department data to be added.
 * @returns A promise resolving to a success message upon successful addition.
 */
export async function AddDepartment(BodyData: IDepartment): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Updates an existing Department's information.
 * @param BodyData - The updated Department data.
 * @param id - The ID of the Department to be updated.
 * @returns A promise resolving to a success message upon successful update.
 */
export async function UpdateDepartment(BodyData: IDepartment, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Retrieves a Department's information by ID.
 * @param id - The ID of the Department to retrieve.
 * @returns A promise resolving to an Department object.
 */
export async function GetByIdDepartment(id: number): Promise<IDepartmentList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let category = data.value;
  return category;
}

/**
 * Deletes a Department from the database by ID.
 * @param id - The ID of the Department to delete.
 * @returns A promise resolving to a success message upon successful deletion.
 */
export async function DeleteDepartment(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}