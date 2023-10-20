import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from '../model/products.model';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  products!: Observable<Products | null>;
   
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    // Retrieve the product id from the route parameters
    const productId = this.route.snapshot.params['id'];

    // Fetch the product details using the product service
    this.products = this.productService.getProductById(productId).pipe(
      catchError(error => {
        // Handle the error here, e.g., show an error message
        console.error('Error fetching product data:', error);
        return of({} as Products); // Return a default or empty Products object in case of an error
      })
    );
  }
}
