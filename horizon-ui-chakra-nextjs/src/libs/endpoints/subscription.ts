import { ISubscriptionById, ISubscriptionList}  from 'types/Subscription';
import fetchApi from 'utils/baseFetch';
import {baseUrl}  from 'utils/header';

const Url = `${baseUrl}/Subscription`;

/**
 * Retrieves a list of Subscriptions from the API.
 * @returns A promise resolving to an array of category objects.
 */
export async function GetSubscription(): Promise<ISubscriptionList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let subscriptions = data.value.data;
  return subscriptions;
}
/**
 * Retrieves a Subscription's information by ID.
 * @param id - The ID of the Subscription to retrieve.
 * @returns A promise resolving to an Subscription object.
 */
export async function GetByIdSubscription(id: number): Promise<ISubscriptionById> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let subscription = data.value;
  return subscription;
}
