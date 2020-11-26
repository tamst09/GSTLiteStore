import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { UpdateProductComponent} from './component/update-product/update-product.component'
import { DeleteProductComponent } from './component/delete-product/delete-product.component';
import { ShopComponent } from './component/shop/shop.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Routes = [
  {path:`login`,component:LoginComponent},
  {path:`register`,component:RegistrationComponent},
  {path:`products`,component:ProductComponent},
  {path:`createProduct`, component: CreateProductComponent },
  {path:`updateProduct/:id`, component: UpdateProductComponent },
  {path:`deleteProduct/:id`, component: DeleteProductComponent },
  {path:`shop`, component: ShopComponent},
  {path:`cart`, component: CartComponent},
  {path: `productDetail/:id`, component: ProductDetailComponent},
  { path: ``, redirectTo: 'shop', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
