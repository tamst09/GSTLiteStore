import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];
  
  constructor(private _service: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this._service.getAllProduct().subscribe((res: any) => {
      this.productList = res;
    })
  }

  toDeletePage(id: number){
    this._router.navigate([`/deleteProduct/${id}`]);
  }
  toUpdatePage(id: number) {
    // console.log(id);
    this._router.navigate([`/updateProduct/${id}`]);
  }
  toCreatePage(){
    this._router.navigate(['/createProduct']);
  }

}
