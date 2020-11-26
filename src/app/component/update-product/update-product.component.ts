import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { Category } from '../../model/category';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product = new Product();
  msg = "";
  manufacturer = "";
  public category: Array<Category> = [];

  constructor(private _service: ProductService, private route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.category = [
      { Id: "Apple", Name: "Apple" },
      { Id: "Samsung", Name: "Samsung" },
      { Id: "Xiaomi", Name: "Xiaomi" },
      { Id: "Huwaii", Name: "Huwaii" }
    ]
    this.getProduct(this.route.snapshot.params['id']);
  }
  handleFileInput(event) {
    this.product.imageFile = event.target.files[0];
    this.product.imageName = event.target.files[0].name;
    console.log(this.product);
  }
  getProduct(id: number) {
    this._service.findProduct(id).subscribe(
      data => {
        this.manufacturer = data.manufacturer;
        this.product = data;
      },
      error => {
        this.msg = "ERROR";
      }
    );
  }

  updateProduct() {
    this._service.updateProduct(this.product.id,this.product).subscribe(
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
