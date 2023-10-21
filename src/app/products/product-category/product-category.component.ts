import { Component } from '@angular/core';
import { Products } from '../model/products.model';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {

  products: Products[] = [];
  categoriesMap = new Map<number, Products[]>();
  categoriesWithCounts: { category: string; count: number }[] = [];
  product: Products | null | undefined;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.route.params.pipe(
      switchMap(params => this.productsService.getProductById(params['catName']).pipe(
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
  viewCategoryProduct(catName:string){
    this.router.navigate(['/category', catName]);
  }
  getProductsByCategory(catName: string) {
    this.productsService.getProductsByCategory(catName).subscribe((products) => {
      this.products = products;
    });
  }
  onSortOptionChange(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    if (selectedOption === 'alphabeticalASC') {
      this.sortProductsByNameASC();
    } else if(selectedOption === 'alphabeticalDESC') {
      this.sortProductsByNameDESC();
    }
  }
  sortProductsByNameASC() {
    this.products = this.productsService.sortProductsByNameASC(this.products);
  }
  sortProductsByNameDESC() {
    this.products = this.productsService.sortProductsByNameDESC(this.products);

  }
  
  
}

