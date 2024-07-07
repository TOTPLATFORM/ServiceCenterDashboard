import { IProductBrand, IProductBrandList } from 'types/ProductBrand';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/ProductBrand`;

/**
 * retrieves a list of ProductBrand from the api.
 * @returns a promise resolving to an array of ProductBrand objects.
 */
export async function getProductBrand(): Promise<IProductBrandList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let ProductBrands = data.value.data;
  return ProductBrands;
}
/**
 * deletes an ProductBrand from the database by id.
 * @param id - the id of the ProductBrand to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteProductBrand(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an ProductBrand's information by id.
 * @param id - the id of the ProductBrand to retrieve.
 * @returns a promise resolving to an ProductBrand object.
 */
export async function getByIdProductBrand(id: number): Promise<IProductBrandList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let ProductBrands = data.value;
  return ProductBrands;
}
/**
 * updates an existing ProductBrand's information.
 * @param BodyData - the updated ProductBrand data.
 * @param id - the id of the ProductBrand to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateProductBrand(BodyData: IProductBrand, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new ProductBrand to the database.
 * @param BodyData - the ProductBrand data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addProductBrand(BodyData: IProductBrand): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}