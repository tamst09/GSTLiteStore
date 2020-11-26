import { Product } from './product';
import { ProductInfo } from './product-info';

export class CartLines {
    id: number|null
    productInfo: Product;
    quantity: number;
    amount: number;
    constructor() {
        this.id = null;
        this.productInfo = new Product();
        this.quantity = 0;
        this.amount = 0;
    }
}
