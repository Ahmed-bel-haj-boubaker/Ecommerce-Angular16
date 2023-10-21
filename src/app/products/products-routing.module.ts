import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  
  { path: 'product-details/:id', component: ProductsDetailsComponent },
  { path: 'category/:catName', component: ProductCategoryComponent },

  { path: '', component: ListProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
