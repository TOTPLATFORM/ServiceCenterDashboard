import { ICustomer, ICustomerList } from 'types/Customer';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Customer`;

/**
 * retrieves a list of Customer from the api.
 * @returns a promise resolving to an array of Customer objects.
 */
export async function getCustomer(): Promise<ICustomerList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Customers = data.value;
  return Customers;
}
/**
 * deletes an Customer from the database by id.
 * @param id - the id of the Customer to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteCustomer(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Customer's information by id.
 * @param id - the id of the Customer to retrieve.
 * @returns a promise resolving to an Customer object.
 */
export async function getByIdCustomer(id: string): Promise<ICustomerList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Customers = data.value;
  return Customers;
}
/**
 * updates an existing Customer's information.
 * @param BodyData - the updated Customer data.
 * @param id - the id of the Customer to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateCustomer(BodyData: ICustomer, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Customer to the database.
 * @param BodyData - the Customer data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addCustomer(BodyData: ICustomer): Promise<string> {
  const data = await fetchApi<any>(`${baseUrl}/Auth/RegisterCustomer`, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}