import { ISales, ISalesList } from 'types/Sales';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Sales`;

/**
 * retrieves a list of Sales from the api.
 * @returns a promise resolving to an array of Sales objects.
 */
export async function getSales(): Promise<ISalesList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Saless = data.value;
  return Saless;
}
/**
 * deletes an Sales from the database by id.
 * @param id - the id of the Sales to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteSales(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Sales's information by id.
 * @param id - the id of the Sales to retrieve.
 * @returns a promise resolving to an Sales object.
 */
export async function getByIdSales(id: string): Promise<ISalesList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Saless = data.value;
  return Saless;
}
/**
 * updates an existing Sales's information.
 * @param BodyData - the updated Sales data.
 * @param id - the id of the Sales to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateSales(BodyData: ISales, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Sales to the database.
 * @param BodyData - the Sales data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addSales(BodyData: ISales): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}