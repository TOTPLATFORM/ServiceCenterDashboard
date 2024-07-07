import { IFeedback, IFeedbackList } from 'types/Feedback';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Feedback`;

/**
 * retrieves a list of Feedback from the api.
 * @returns a promise resolving to an array of Feedback objects.
 */
export async function getFeedback(): Promise<IFeedbackList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Feedbacks = data.value;
  return Feedbacks;
}
/**
 * deletes an Feedback from the database by id.
 * @param id - the id of the Feedback to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteFeedback(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Feedback's information by id.
 * @param id - the id of the Feedback to retrieve.
 * @returns a promise resolving to an Feedback object.
 */
export async function getByIdFeedback(id: string): Promise<IFeedbackList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Feedbacks = data.value;
  return Feedbacks;
}
/**
 * updates an existing Feedback's information.
 * @param BodyData - the updated Feedback data.
 * @param id - the id of the Feedback to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateFeedback(BodyData: IFeedback, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Feedback to the database.
 * @param BodyData - the Feedback data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addFeedback(BodyData: IFeedback): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}