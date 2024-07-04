import {IServicePackage, IServicePackageList}  from 'types/ServicePackage';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/ServicePackage`;

/**
 * Retrieves a list of servicePackages from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetServicePackage(): Promise<IServicePackageList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let servicePackages = data.value.data;
  return servicePackages;
}

/**
 * Adds a new ServicePackage to the database.
 * @param BodyData - The ServicePackage data to be added.
 * @returns A promise resolving to a success message upon successful addition.
 */
export async function AddServicePackage(BodyData: IServicePackage): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Updates an existing ServicePackage's information.
 * @param BodyData - The updated ServicePackage data.
 * @param id - The ID of the ServicePackage to be updated.
 * @returns A promise resolving to a success message upon successful update.
 */
export async function UpdateServicePackage(BodyData: IServicePackage, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Retrieves a ServicePackage's information by ID.
 * @param id - The ID of the ServicePackage to retrieve.
 * @returns A promise resolving to an ServicePackage object.
 */
export async function GetByIdServicePackage(id: number): Promise<IServicePackageList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let category = data.value;
  return category;
}

/**
 * Deletes a ServicePackage from the database by ID.
 * @param id - The ID of the ServicePackage to delete.
 * @returns A promise resolving to a success message upon successful deletion.
 */
export async function DeleteServicePackage(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}