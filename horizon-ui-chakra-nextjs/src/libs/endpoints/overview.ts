import { IOverview, IOverviewList } from 'types/Overview';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Overview`;

/**
 * retrieves a list of Overview from the api.
 * @returns a promise resolving to an array of Overview objects.
 */
export async function getOverview(): Promise<IOverviewList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Overviews = data.value;
  return Overviews;
}
/**
 * deletes an Overview from the database by id.
 * @param id - the id of the Overview to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteOverview(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/{id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Overview's information by id.
 * @param id - the id of the Overview to retrieve.
 * @returns a promise resolving to an Overview object.
 */
export async function getByIdOverview(id: string): Promise<IOverviewList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Overviews = data.value;
  return Overviews;
}
/**
 * updates an existing Overview's information.
 * @param BodyData - the updated Overview data.
 * @param id - the id of the Overview to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateOverview(BodyData: IOverview, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Overview to the database.
 * @param BodyData - the Overview data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addOverview(BodyData: IOverview): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}