import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from '../model/products.model';
import { Router } from '@angular/router';
import { Category } from '../model/category.model';
import { CategoryService } from 'src/app/Core/Services/category.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : Products[] = [];
  categories : Category[] = [];
   constructor(private productsService :  ProductsService, private router : Router , private CategoryService : CategoryService){}
  
   ngOnInit(): void {
   
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.loadCategories();;
    });
     
   }

   loadCategories(){
    this.CategoryService.getCategory().subscribe((categories)=>{
      this.categories = categories;
      this.assignCategoryToProduct();
    })
   }

   assignCategoryToProduct(){
    this.products.forEach((product)=>{
      product.category = this.categories.find((Category)=>{
        Category.id === product.categoryId
      });
    });
  
}
   viewProductDetail(productId: string) {
    this.router.navigate(['/product-details', productId]);
  }

}
