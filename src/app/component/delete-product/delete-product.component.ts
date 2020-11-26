import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product = new Product();
  msg = "";
  category ="";
  manufacturer="";

  constructor(private _service: ProductService, private route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id: number) {
    this._service.findProduct(id).subscribe(
      data => {
        console.log(data);
        this.product = data;
        this.manufacturer = data.manufacturer;
        this.category = data.category;
      },
      error => {
        this.msg = "ERROR";
      }
    );
  }

  isInvalid(){
    if (this.product.active)
      return false;
    return true;
  }

  deleteProduct() {
    this._service.deleteProduct(this.product.id,this.product).subscribe(
      data => {
        console.log(this.product);
        this._router.navigate(['/products']);
      },
      error => {
        this.msg = "ERROR";
      }
    )
  }

}
