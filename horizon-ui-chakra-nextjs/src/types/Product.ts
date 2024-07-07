export interface IProductList
{  
	id: number;
    productName: string,
    productDescription: string,
    productPrice: number,
    categoryName: string,
    productBrandName: string
}
export interface IProduct
{ 
    productName: string,
    productDescription: string,
    productPrice: number,
    productCategoryId: number,
    productBrandId: number
}