import { IServiceCategory, IServiceCategoryList } from 'types/ServiceCategory';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/ServiceCategory`;

/**
 * retrieves a list of ServiceCategory from the api.
 * @returns a promise resolving to an array of ServiceCategory objects.
 */
export async function getServiceCategory(): Promise<IServiceCategoryList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let ServiceCategorys = data.value.data;
  return ServiceCategorys;
}
/**
 * deletes an ServiceCategory from the database by id.
 * @param id - the id of the ServiceCategory to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteServiceCategory(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an ServiceCategory's information by id.
 * @param id - the id of the ServiceCategory to retrieve.
 * @returns a promise resolving to an ServiceCategory object.
 */
export async function getByIdServiceCategory(id: number): Promise<IServiceCategoryList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let ServiceCategorys = data.value;
  return ServiceCategorys;
}
/**
 * updates an existing ServiceCategory's information.
 * @param BodyData - the updated ServiceCategory data.
 * @param id - the id of the ServiceCategory to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateServiceCategory(BodyData: IServiceCategory, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new ServiceCategory to the database.
 * @param BodyData - the ServiceCategory data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addServiceCategory(BodyData: IServiceCategory): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

