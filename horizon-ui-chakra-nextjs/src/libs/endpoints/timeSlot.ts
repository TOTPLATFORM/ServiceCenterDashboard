import { ITimeSlot, ITimeSlotList } from 'types/TimeSlot';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/TimeSlot`;

/**
 * retrieves a list of TimeSlot from the api.
 * @returns a promise resolving to an array of TimeSlot objects.
 */
export async function getTimeSlot(): Promise<ITimeSlotList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let TimeSlots = data.value;
  return TimeSlots;
}
/**
 * deletes an TimeSlot from the database by id.
 * @param id - the id of the TimeSlot to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteTimeSlot(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an TimeSlot's information by id.
 * @param id - the id of the TimeSlot to retrieve.
 * @returns a promise resolving to an TimeSlot object.
 */
export async function getByIdTimeSlot(id: string): Promise<ITimeSlotList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let TimeSlots = data.value;
  return TimeSlots;
}
/**
 * updates an existing TimeSlot's information.
 * @param BodyData - the updated TimeSlot data.
 * @param id - the id of the TimeSlot to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateTimeSlot(BodyData: ITimeSlot, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new TimeSlot to the database.
 * @param BodyData - the TimeSlot data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addTimeSlot(BodyData: ITimeSlot): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}