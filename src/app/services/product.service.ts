import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Product } from '../model/product';
import { CartInfo } from '../model/cart-info';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private _http: HttpClient) { }
    public getAllProduct(): Observable<Product[]> {
        return this._http.get<any>(`http://localhost:8080/api/v1/product/list`);
    }

    public addProduct(product: Product): Observable<Product> {
        return this._http.post<any>(`http://localhost:8080/api/v1/product/add`, product);
    }

    public updateProduct(id:number, product: Product): Observable<Product> {
        return this._http.put<any>(`http://localhost:8080/api/v1/product/update/${id}`, product);
    }

    public findProduct(id: number): Observable<Product> {
        return this._http.get<Product>(`http://localhost:8080/api/v1/product/get/${id}`);
    }
    public deleteProduct(id: number, product: Product): Observable<Product> {
        product.active = false;
        return this._http.put<any>(`http://localhost:8080/api/v1/product/update/${id}`, product);
    }
    public getCart(): Observable<CartInfo> {
        return this._http.get<CartInfo>(`http://localhost:8080/api/v1/cart/viewCart`);
    }

    public addToCart(id: number): Observable<CartInfo>{
        return this._http.get<CartInfo>(`http://localhost:8080/api/v1/cart/buyProduct/${id}`);
    }
}




