import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product = new Product();
  msg="";

  constructor(private _service: ProductService) {}

  ngOnInit(): void {
  
  }
  handleFileInput(event) {
    this.product.imageFile = event.target.files[0];
    this.product.imageName = event.target.files[0].name;
   console.log(this.product);
  }


  createProduct(){
    this._service.addProduct(this.product).subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.msg = "ERROR";
      }
    );
    //console.log(this.product)
  }

 
}
