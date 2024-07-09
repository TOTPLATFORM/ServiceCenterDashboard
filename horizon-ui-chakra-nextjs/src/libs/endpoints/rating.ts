import {IRatingService, IRatingServiceList}  from 'types/Rating';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/Rating`;

/**
 * Retrieves a list of ratingServices from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetRatingService(): Promise<IRatingServiceList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let ratingServices = data.value.data;
  return ratingServices;
}



/**
 * Retrieves a RatingService's information by ID.
 * @param id - The ID of the RatingService to retrieve.
 * @returns A promise resolving to an RatingService object.
 */
export async function GetByIdRatingService(id: string): Promise<IRatingServiceList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let category = data.value;
  return category;
}

/**
 * Deletes a RatingService from the database by ID.
 * @param id - The ID of the RatingService to delete.
 * @returns A promise resolving to a success message upon successful deletion.
 */
export async function DeleteRatingService(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}