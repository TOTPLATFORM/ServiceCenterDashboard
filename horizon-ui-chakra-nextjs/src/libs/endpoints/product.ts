import { IProduct, IProductList } from 'types/Product';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/Product`;

/**
 * retrieves a list of Product from the api.
 * @returns a promise resolving to an array of Product objects.
 */
export async function getProduct(): Promise<IProductList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let Products = data.value;
  return Products;
}
/**
 * deletes an Product from the database by id.
 * @param id - the id of the Product to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteProduct(id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an Product's information by id.
 * @param id - the id of the Product to retrieve.
 * @returns a promise resolving to an Product object.
 */
export async function getByIdProduct(id: string): Promise<IProductList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let Products = data.value;
  return Products;
}
/**
 * updates an existing Product's information.
 * @param BodyData - the updated Product data.
 * @param id - the id of the Product to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateProduct(BodyData: IProduct, id: string): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new Product to the database.
 * @param BodyData - the Product data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addProduct(BodyData: IProduct): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}