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
  let Feedbacks = data.value.data;
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
