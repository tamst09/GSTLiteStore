import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartInfo } from '../../model/cart-info';
import { CartLines } from '../../model/cart-lines';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productList: Product[] = [];
  cartInfor = new CartInfo();
  cartList: Product[] = [];
  product = new Product();
  msg=""

  constructor(private _service: ProductService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id'])
  }
  
  getProduct(id: number) {
    this._service.findProduct(id).subscribe(
      data => {
       this.product = data
      },
      error => {
        this.msg = "ERROR";
      }
    );
  }

  toDeletePage(id: number) {
    this._router.navigate([`/deleteProduct/${id}`]);
  }

  toUpdatePage(id: number) {
    // console.log(id);
    this._router.navigate([`/updateProduct/${id}`]);
  }

  toCreatePage() {
    this._router.navigate(['/createProduct']);
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

  addtoCart(id: number) {
    console.log(id);
    this._service.findProduct(id).subscribe(
      data => {
        let cart = localStorage.getItem("Cart")
        if (cart) {
          this.cartInfor = JSON.parse(cart);
          let res = this.isInclude(this.cartInfor.cartLines, data.id);
          console.log(res);
          if (res.isInclude) {
            this.cartInfor.cartLines[res.index].quantity += 1;
            this.cartInfor.cartLines[res.index].amount += this.cartInfor.cartLines[res.index].amount;
            this.cartInfor.amountTotal = this.totalAmount(this.cartInfor.cartLines);
            this.cartInfor.quantityTotal = this.totalQuantity(this.cartInfor.cartLines);
            localStorage.setItem('Cart', JSON.stringify(this.cartInfor));
            alert("Đã thêm vào giỏ hàng")
          } else {
            let cartlines = new CartLines();
            cartlines.productInfo = data;
            cartlines.quantity = 1;
            cartlines.amount = data.price;
            this.cartInfor.cartLines.push(cartlines);
            this.cartInfor.amountTotal = this.totalAmount(this.cartInfor.cartLines);;
            this.cartInfor.quantityTotal = this.totalQuantity(this.cartInfor.cartLines);
            localStorage.setItem('Cart', JSON.stringify(this.cartInfor));
            alert("Đã thêm vào giỏ hàng")
          }
        } else {
          console.log("new")
          let newCartInfor = new CartInfo();
          let cartlines = new CartLines();
          cartlines.productInfo = data;
          cartlines.quantity = 1;
          cartlines.amount = data.price;
          newCartInfor.cartLines.push(cartlines);
          newCartInfor.amountTotal = this.totalAmount(newCartInfor.cartLines);;
          newCartInfor.quantityTotal = this.totalQuantity(newCartInfor.cartLines);
          localStorage.setItem("Cart", JSON.stringify(newCartInfor));
          alert("Đã thêm vào giỏ hàng")
        }
      },
      error => {
        alert("ERROR")
      }
    );
  }

}
