import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product = new Product();
  msg="";

  constructor(private _service: ProductService, private _router:Router) {}

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
        this._router.navigate(['/products']);
      },
      error => {
        if(error.status===401)
        {
          console.log("unauthenticated");
          this._router.navigate(['/login']);
        }
        else{
          this.msg = "Error";
        }
      }
    );
    //console.log(this.product)
  }

 
}
