export class ProductInfo {
    id: number|null;
    nameProduct: string;
    price: number|null;
    unitsInStock: number|null;
    description: string;
    manufacturer: string;
    imageName: string;
    category: string;
    active: boolean;
    constructor() {
        this.id = null,
        this.nameProduct = "",
        this.price = null,
        this.unitsInStock = null,
        this.description = "",
        this.manufacturer = "",
        this.imageName = "",
        this.category = "",
        this.active = true
    }
}
