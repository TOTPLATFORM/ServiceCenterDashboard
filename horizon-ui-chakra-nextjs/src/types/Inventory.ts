
export interface IInventoryList {
	id: number,
	inventoryName: string,
	inventoryLocation: string,
	inventoryCapacity: number

}

export interface IInventory {
	inventoryName: string,
	inventoryLocation: string,
	inventoryCapacity: number,
	wareHouseManagerId:string
}