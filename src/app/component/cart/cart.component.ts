import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartInfo } from '../../model/cart-info';
import { LoginService } from '../../services/login.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartInfor = new CartInfo();
  cartNumber = 0;
  msg ="";

  constructor(private _service: LoginService, private _ProdService: ProductService ,private _router: Router) { }

  ngOnInit(): void { 
    this.getCartNumber();
  }

  public onLogout = () => {
    this._service.logout();
    this._router.navigateByUrl('/login');
  }
  totalQuantity(cartLines) {
    let sum = 0;
    cartLines.forEach(element => {
      sum = sum + element.quantity;
    });
    return sum;
  }
  totalAmount(cartLines) {
    let sum = 0;
    cartLines.forEach(element => {
      sum = sum + element.amount;
    });
    return sum;
  }
  isInclude(cartLines, id) {
    let res = { index: -1, productId: -1, isInclude: false }

    cartLines.forEach((element, i) => {
      if (id == element.productInfo.id) {
        res.productId = element.id;
        res.index = i;
        res.isInclude = true;
      }
    });

    return res;
  }
  public updateCart = (event,id) =>{
    let quantity = event.target.value
    let cart = localStorage.getItem("Cart")
    if (cart) {
      this.cartInfor = JSON.parse(cart);
      let res = this.isInclude(this.cartInfor.cartLines,id);
      console.log(res);
      if (res.isInclude) {
        this.cartInfor.cartLines[res.index].quantity += 1;
        this.cartInfor.cartLines[res.index].amount = this.cartInfor.cartLines[res.index].quantity 
        * this.cartInfor.cartLines[res.index].productInfo.price;
        this.cartInfor.amountTotal = this.totalAmount(this.cartInfor.cartLines);
        this.cartInfor.quantityTotal = this.totalQuantity(this.cartInfor.cartLines);
        localStorage.setItem('Cart', JSON.stringify(this.cartInfor));
      }
    }
  }

  public getCartNumber = () => {
    let cart = localStorage.getItem("Cart")
    if(cart) {
      this.cartInfor = JSON.parse(cart);
    }else{
      localStorage.setItem("Cart",JSON.stringify(new CartInfo()));
    }
  }

  public checkout(){
    alert("Cảm ơn bạn đã mua hàng")
    localStorage.clear();
    this._router.navigate(['/shop'])
  }

  public deleteproductFromCart(id){
    let cart = localStorage.getItem("Cart")
    if (cart) {
      this.cartInfor = JSON.parse(cart);
      let res = this.isInclude(this.cartInfor.cartLines, id);
      console.log(res);
      if (res.isInclude) {
        this.cartInfor.cartLines.splice(res.index,1);
        // this.cartInfor.cartLines[res.index].quantity -= 1;
        // this.cartInfor.cartLines[res.index].amount -= this.cartInfor.cartLines[res.index].amount;
        this.cartInfor.amountTotal = this.totalAmount(this.cartInfor.cartLines);
        this.cartInfor.quantityTotal = this.totalQuantity(this.cartInfor.cartLines);
        localStorage.setItem('Cart', JSON.stringify(this.cartInfor));
      }
    }
  }
}
