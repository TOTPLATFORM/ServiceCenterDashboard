import { ICenter, ICenterList } from 'types/Center';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Center`;

/**
 * retrieves a list of Center from the api.
 * @returns a promise resolving to an array of Center objects.
 */
export async function getCenter(): Promise<ICenterList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Centers = data.value;
  return Centers;
}
/**
 * deletes an Center from the database by id.
 * @param id - the id of the Center to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteCenter(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Center's information by id.
 * @param id - the id of the Center to retrieve.
 * @returns a promise resolving to an Center object.
 */
export async function getByIdCenter(id: string): Promise<ICenterList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Centers = data.value;
  return Centers;
}
/**
 * updates an existing Center's information.
 * @param BodyData - the updated Center data.
 * @param id - the id of the Center to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateCenter(BodyData: ICenter, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Center to the database.
 * @param BodyData - the Center data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addCenter(BodyData: ICenter): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}