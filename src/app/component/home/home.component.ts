import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Products } from 'src/app/products/model/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Products[] = [];
   constructor(private productsService :  ProductsService, private router : Router){}
  
   ngOnInit(): void {
   
    this.productsService.getAllProducts().subscribe((data: Products[]) => {
      this.products = data;
    });
     
  }
}
