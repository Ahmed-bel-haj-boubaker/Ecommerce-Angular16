import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path:'',component:ListProductsComponent},
  {path:'product-details/:id',component:ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
