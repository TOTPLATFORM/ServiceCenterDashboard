import { IProductCategory, IProductCategoryList } from 'types/ProductCategory';
import fetchApi from 'utils/baseFetch';
import { baseUrl } from 'utils/header';
const Url = `${baseUrl}/ProductCategory`;

/**
 * retrieves a list of ProductCategory from the api.
 * @returns a promise resolving to an array of ProductCategory objects.
 */
export async function getProductCategory(): Promise<IProductCategoryList[]> {
  const data = await fetchApi<any>(Url, "GET");
  let ProductCategorys = data.value.data;
  return ProductCategorys;
}
/**
 * deletes an ProductCategory from the database by id.
 * @param id - the id of the ProductCategory to delete.
 * @returns a promise resolving to a success message upon successful deletion.
 */
export async function deleteProductCategory(id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "DELETE");
  return data.successMessage;
}
/**
 * retrieves an ProductCategory's information by id.
 * @param id - the id of the ProductCategory to retrieve.
 * @returns a promise resolving to an ProductCategory object.
 */
export async function getByIdProductCategory(id: number): Promise<IProductCategoryList> {
  const data = await fetchApi<any>(`${Url}/${id}`, "GET");
  let ProductCategorys = data.value;
  return ProductCategorys;
}
/**
 * updates an existing ProductCategory's information.
 * @param BodyData - the updated ProductCategory data.
 * @param id - the id of the ProductCategory to be updated.
 * @returns a promise resolving to a success message upon successful update.
 */
export async function updateProductCategory(BodyData: IProductCategory, id: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/${id}`, "PUT", JSON.stringify(BodyData));
  return data.successMessage;
}
/**
 * adds a new ProductCategory to the database.
 * @param BodyData - the ProductCategory data to be added.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function addProductCategory(BodyData: IProductCategory): Promise<string> {
  const data = await fetchApi<any>(Url, "POST", JSON.stringify(BodyData));
  return data.successMessage;
}

/**
 * assigns ProductCategory to Productbrand.
 * @param categoryId - the ProductCategory id to be assigned to product brand.
 * @param brandId - the ProductBrand id to be assigned to product category.
 * @returns a promise resolving to a success message upon successful addition.
 */
export async function AssingProductCategoryToProductBrand(categoryId: number, brandId: number): Promise<string> {
  const data = await fetchApi<any>(`${Url}/assign?productCategory=${categoryId}&productBrandId=${brandId}`, "Get");
  return data.successMessage;
}