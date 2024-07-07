import { IWareHouseManager, IWareHouseManagerList } from 'types/WareHouseManager';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/WareHousManager`;

/**
 * retrieves a list of WareHouseManager from the api.
 * @returns a promise resolving to an array of WareHouseManager objects.
 */
export async function getWareHouseManager(): Promise<IWareHouseManagerList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let WareHouseManagers = data.value;
  return WareHouseManagers;
}
/**
 * deletes an WareHouseManager from the database by id.
 * @param id - the id of the WareHouseManager to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteWareHouseManager(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an WareHouseManager's information by id.
 * @param id - the id of the WareHouseManager to retrieve.
 * @returns a promise resolving to an WareHouseManager object.
 */
export async function getByIdWareHouseManager(id: string): Promise<IWareHouseManagerList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let WareHouseManagers = data.value;
  return WareHouseManagers;
}
/**
 * updates an existing WareHouseManager's information.
 * @param BodyData - the updated WareHouseManager data.
 * @param id - the id of the WareHouseManager to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateWareHouseManager(BodyData: IWareHouseManager, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new WareHouseManager to the database.
 * @param BodyData - the WareHouseManager data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addWareHouseManager(BodyData: IWareHouseManager): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}