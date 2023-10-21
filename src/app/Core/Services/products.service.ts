import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Products } from 'src/app/products/model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   
  URL : string ="http://localhost:3000/products"
  constructor(private http:HttpClient) { }

   getAllProducts():Observable<Products[]> {
    return this.http.get<Products[]>(this.URL);
   }
   getProductById(id: string): Observable<Products> {
    return this.http.get<Products>(`${this.URL}/${id}`);
  }
  getProductsByCategory(catName: String): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.URL}?catName=${catName}`);
  }
  sortProductsByNameASC(products: Products[]): Products[] {
    return products.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  sortProductsByNameDESC(products: Products[]): Products[] {
    return products.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
}
