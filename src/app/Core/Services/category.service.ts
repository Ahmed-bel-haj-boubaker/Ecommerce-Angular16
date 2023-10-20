import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/products/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL : string ="http://localhost:3001/category"
  constructor(private http : HttpClient) { }

  getCategory() : Observable<Category[]>{
    return this.http.get<Category[]>(this.URL);
  }
}
