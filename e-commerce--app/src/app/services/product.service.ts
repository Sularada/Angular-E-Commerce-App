import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { catchError, Observable, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(categoryId: number): Observable<Product[]> {
    let path = categoryId ? "http://localhost:3000/products?categoryId=" + categoryId : "http://localhost:3000/products"
    return this.http.get<Product[]>(path).pipe(tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applicaiton/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>("http://localhost:3000/products", product, httpOptions).pipe(tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message
    } else {
      errorMessage = 'Sistemsel bir hata oluştu'
    }
    return throwError(() => new Error(errorMessage));
  }
}
