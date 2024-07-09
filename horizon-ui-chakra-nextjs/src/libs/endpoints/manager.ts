import { IManager, IManagerList } from 'types/Manager';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/Manager`;

/**
 * Retrieves a list of Managers from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetManager(): Promise<IManagerList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Managers = data.value.data;
  return Managers;
}

/**
 * Adds a new Manager to the database.
 * @param BodyData - The Manager data to be added.
 * @returns A promise resolving to a success message upon successful addition.
 */
export async function AddManager(BodyData: IManager): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Updates an existing Manager's information.
 * @param BodyData - The updated Manager data.
 * @param id - The ID of the Manager to be updated.
 * @returns A promise resolving to a success message upon successful update.
 */
export async function UpdateManager(BodyData: IManager, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Retrieves a Manager's information by ID.
 * @param id - The ID of the Manager to retrieve.
 * @returns A promise resolving to an Manager object.
 */
export async function GetByIdManager(id: string): Promise<IManagerList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let category = data.value;
  return category;
}

/**
 * Deletes a Manager from the database by ID.
 * @param id - The ID of the Manager to delete.
 * @returns A promise resolving to a success message upon successful deletion.
 */
export async function DeleteManager(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}