import { IContact, IContactList, Status } from 'types/Contact';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Contact`;

/**
 * retrieves a list of Contact from the api.
 * @returns a promise resolving to an array of Contact objects.
 */
export async function getContact(): Promise<IContactList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Contacts = data.value.data;
  return Contacts;
}

/**
 * retrieves an Contact's information by id.
 * @param id - the id of the Contact to retrieve.
 * @returns a promise resolving to an Contact object.
 */
export async function getByIdContact(id: string): Promise<IContactList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Branchs = data.value;
  return Branchs;
}

/**
 * adds a new Contact to the database.
 * @param BodyData - the Contact data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addContact(BodyData: IContact): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}


/**
 * update a  Contact to the database.
 * @param BodyData - the Contact data to be updated.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function updateContact(BodyData:IContactList,contactId: string): Promise<string>{
  const data = await fetchApi<any>(`${Url}/${contactId}}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;  
}