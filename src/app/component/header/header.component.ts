import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartInfo } from '../../model/cart-info';
import { LoginService } from '../../services/login.service';
import { ProductService } from '../../services/product.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';
  @Input() button = '';
  
  cartInfor = new CartInfo();
  cartNumber = 0;
  msg ="";
  
  constructor(private _service: LoginService, private _ProdService: ProductService ,private _router: Router) { }

  ngOnInit(): void {
  }

  public onLogout = () => {
    this._service.logout();
    this._router.navigateByUrl('/login');
  }

  public getCartNumber = () => {
    this._ProdService.getCart().subscribe(
      data => {
        console.log(data);
        this.cartNumber = data.quantityTotal;
      },
      error => {
        this.msg = "error";
        console.log(error)
      }
    );
  }

  public gotoManageProduct(){
      this._router.navigate(["/products"]);
  }
}
