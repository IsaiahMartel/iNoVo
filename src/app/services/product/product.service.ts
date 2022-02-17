import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product/product';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/product";

  constructor(private httpClient: HttpClient) { }


  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.endpoint);
  }

  getProductById(id): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Product fetched: ${id}`)),
        catchError(this.handleError<Product[]>(`Get product id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}

}
