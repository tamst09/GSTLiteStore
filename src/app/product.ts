export class Product {
    id: number;
    nameProduct: string;
    price: number;
    unitsInStock: number;
    description: string;
    manufacturer: string;
    imageName: string;
    imageFile: File | null;
    category: string;
    isActive: boolean;
    constructor() {
        this.id=0,
        this.nameProduct= "",
        this.price= 1,
        this.unitsInStock= 1,
        this.description= "Điện thoại",
        this.manufacturer= "",
        this.imageName= "string",
        this.imageFile= null,
        this.category= "",
        this.isActive= true 
    }
}