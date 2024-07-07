import {IComplaint, IComplaintList}  from 'types/Complaint';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/Complaint`;

/**
 * Retrieves a list of complaints from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetComplaint(): Promise<IComplaintList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let complaints = data.value;
  return complaints;
}

/**
 * Adds a new Complaint to the database.
 * @param BodyData - The Complaint data to be added.
 * @returns A promise resolving to a success message upon successful addition.
 */
export async function AddComplaint(BodyData: IComplaint): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Updates an existing Complaint's information.
 * @param BodyData - The updated Complaint data.
 * @param id - The ID of the Complaint to be updated.
 * @returns A promise resolving to a success message upon successful update.
 */
export async function UpdateComplaint(BodyData: IComplaint, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * Retrieves a Complaint's information by ID.
 * @param id - The ID of the Complaint to retrieve.
 * @returns A promise resolving to an Complaint object.
 */
export async function GetByIdComplaint(id: string): Promise<IComplaintList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let category = data.value;
  return category;
}

/**
 * Deletes a Complaint from the database by ID.
 * @param id - The ID of the Complaint to delete.
 * @returns A promise resolving to a success message upon successful deletion.
 */
export async function DeleteComplaint(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}