import { CartLines } from './cart-lines';

export class CartInfo {
    cartLines: CartLines[];
    amountTotal: number;
    quantityTotal: number;
    empty: boolean;
    constructor() {
        this.cartLines = Array<CartLines>();
        this.amountTotal = 0;
        this.quantityTotal = 0;
        this.empty = true;
    }
}
