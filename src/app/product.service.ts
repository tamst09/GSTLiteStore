import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private _http: HttpClient) { }
    public getAllProduct(): Observable<Product[]> {
        return this._http.get<any>("http://localhost:8080/api/v1/product/list");
    }

    public addProduct(product: Product): Observable<Product> {
        return this._http.post<any>("http://localhost:8080/api/v1/product/add", product);
    }

    public findProduct(id: number): Observable<Product> {
        return this._http.get<Product>(`http://localhost:8080/api/v1/product/get/${id}`);
    }
}




