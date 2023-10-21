import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from '../model/products.model';

import { catchError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: Products | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    // Retrieve the product id from the route parameters
    this.route.params.pipe(
      switchMap(params => this.productService.getProductById(params['id']).pipe(
        catchError(error => {
          // Handle the error here, e.g., show an error message
          console.error('Error fetching product data:', error);
          return of(null);
        })
      ))
    ).subscribe((product: Products | null) => {
      this.product = product;
    });
  }
}
