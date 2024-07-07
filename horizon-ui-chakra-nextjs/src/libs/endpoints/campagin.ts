import { ICampagin, ICampaginList } from 'types/Campagin';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Campagin`;

/**
 * retrieves a list of Campagin from the api.
 * @returns a promise resolving to an array of Campagin objects.
 */
export async function getCampagin(): Promise<ICampaginList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Campagins = data.value.data;
  return Campagins;
}
/**
 * deletes an Campagin from the database by id.
 * @param id - the id of the Campagin to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteCampagin(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Campagin's information by id.
 * @param id - the id of the Campagin to retrieve.
 * @returns a promise resolving to an Campagin object.
 */
export async function getByIdCampagin(id: number): Promise<ICampaginList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Campagins = data.value;
  return Campagins;
}
/**
 * updates an existing Campagin's information.
 * @param BodyData - the updated Campagin data.
 * @param id - the id of the Campagin to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateCampagin(BodyData: ICampagin, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Campagin to the database.
 * @param BodyData - the Campagin data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addCampagin(BodyData: ICampagin): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}