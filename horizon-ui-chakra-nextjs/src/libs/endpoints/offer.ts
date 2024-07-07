import { IOffer, IOfferList } from 'types/Offer';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Offer`;

/**
 * retrieves a list of Offer from the api.
 * @returns a promise resolving to an array of Offer objects.
 */
export async function getOffer(): Promise<IOfferList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Offers = data.value;
  return Offers;
}
/**
 * deletes an Offer from the database by id.
 * @param id - the id of the Offer to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteOffer(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Offer's information by id.
 * @param id - the id of the Offer to retrieve.
 * @returns a promise resolving to an Offer object.
 */
export async function getByIdOffer(id: string): Promise<IOfferList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Offers = data.value;
  return Offers;
}
/**
 * updates an existing Offer's information.
 * @param BodyData - the updated Offer data.
 * @param id - the id of the Offer to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateOffer(BodyData: IOffer, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Offer to the database.
 * @param BodyData - the Offer data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addOffer(BodyData: IOffer): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}