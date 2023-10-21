import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductCategoryComponent } from './product-category/product-category.component';


@NgModule({
  declarations: [
    ProductsDetailsComponent,
    ListProductsComponent,
    ProductCategoryComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
