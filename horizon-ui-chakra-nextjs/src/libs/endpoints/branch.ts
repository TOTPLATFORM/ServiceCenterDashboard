import { IBranch, IBranchList } from 'types/Branch';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Branch`;

/**
 * retrieves a list of Branch from the api.
 * @returns a promise resolving to an array of Branch objects.
 */
export async function getBranch(): Promise<IBranchList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Branchs = data.value.data;
  return Branchs;
}
/**
 * deletes an Branch from the database by id.
 * @param id - the id of the Branch to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteBranch(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Branch's information by id.
 * @param id - the id of the Branch to retrieve.
 * @returns a promise resolving to an Branch object.
 */
export async function getByIdBranch(id: number): Promise<IBranchList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Branchs = data.value;
  return Branchs;
}
/**
 * updates an existing Branch's information.
 * @param BodyData - the updated Branch data.
 * @param id - the id of the Branch to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateBranch(BodyData: IBranch, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Branch to the database.
 * @param BodyData - the Branch data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addBranch(BodyData: IBranch): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}