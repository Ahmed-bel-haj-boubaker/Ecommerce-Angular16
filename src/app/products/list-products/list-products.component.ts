import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from '../model/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Products[] = [];
  categoriesMap = new Map<number, Products[]>();
  categoriesWithCounts: { category: string; count: number }[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;

      // Organize products into categories
      this.products.forEach((product) => {
        const categoryArray = this.categoriesMap.get(product.categoryId);
        if (categoryArray) {
          categoryArray.push(product);
        } else {
          // If the array doesn't exist, create a new one and add the product
          this.categoriesMap.set(product.categoryId, [product]);
        }
      });

      // Calculate category counts
      this.calculateCategoryCounts();
    });
  }

  calculateCategoryCounts() {
    this.categoriesWithCounts = Array.from(this.categoriesMap.entries()).map(([categoryId, productsInCategory]) => {
      const categoryName = productsInCategory[0].catName; // Assuming all products in the category have the same category name
      const productCount = productsInCategory.length;
      return { category: categoryName, count: productCount };
    
    });
    console.log(this.categoriesWithCounts);
  }

  viewProductDetail(productId: string) {
    this.router.navigate(['/product-details', productId]);
  }

  getProductsByCategory(catName: string) {
    this.productsService.getProductsByCategory(catName).subscribe((products) => {
      this.products = products;
    });
  }
  
  
  
  
  
}
