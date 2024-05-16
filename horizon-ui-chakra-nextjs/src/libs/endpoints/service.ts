import {IService, IServiceList}  from 'types/Service';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/Service`;

/**
 * Retrieves a list of services from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetService(): Promise<IServiceList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let services = data.value;
  return services;
}

/**
 * Adds a new Service to the database.
 * @param BodyData - The Service data to be added.
 * @returns A promise resolving to a success message upon successful addition.
 */
export async function AddService(BodyData: IService): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Updates an existing Service's information.
 * @param BodyData - The updated Service data.
 * @param id - The ID of the Service to be updated.
 * @returns A promise resolving to a success message upon successful update.
 */
export async function UpdateService(BodyData: IService, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Retrieves a Service's information by ID.
 * @param id - The ID of the Service to retrieve.
 * @returns A promise resolving to an Service object.
 */
export async function GetByIdService(id: string): Promise<IServiceList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let category = data.value;
  return category;
}

/**
 * Deletes a Service from the database by ID.
 * @param id - The ID of the Service to delete.
 * @returns A promise resolving to a success message upon successful deletion.
 */
export async function DeleteService(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}?id=${id}`, "DELETE");
  return data.successMessage;
}