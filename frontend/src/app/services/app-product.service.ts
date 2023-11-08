import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class AppProductService {
  private myAppUrl: string;
  private myApiUrl: string;
  
  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:80/';
    this.myApiUrl = 'products/';
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deteteProduct(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveNewProduct(product: Product): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product);
  }

  getProductById(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  } 
  
  updateProduct(id: number, product: Product): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
}
