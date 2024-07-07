import { IVendor, IVendorList } from 'types/Vendor';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Vendor`;

/**
 * retrieves a list of Vendor from the api.
 * @returns a promise resolving to an array of Vendor objects.
 */
export async function getVendor(): Promise<IVendorList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Vendors = data.value;
  return Vendors;
}
/**
 * deletes an Vendor from the database by id.
 * @param id - the id of the Vendor to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteVendor(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Vendor's information by id.
 * @param id - the id of the Vendor to retrieve.
 * @returns a promise resolving to an Vendor object.
 */
export async function getByIdVendor(id: string): Promise<IVendorList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Vendors = data.value;
  return Vendors;
}
/**
 * updates an existing Vendor's information.
 * @param BodyData - the updated Vendor data.
 * @param id - the id of the Vendor to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateVendor(BodyData: IVendor, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Vendor to the database.
 * @param BodyData - the Vendor data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addVendor(BodyData: IVendor): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}