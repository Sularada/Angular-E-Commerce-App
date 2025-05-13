import { Component } from '@angular/core';
import { Product } from './product';
import {CommonModule} from '@angular/common';
import {ProductFilterPipe} from './product-filter.pipe';
import { FormsModule } from '@angular/forms';
import {AlertifyService} from '../services/alertify.service'
import {ProductService} from '../services/product.service'
@Component({
  selector: 'app-product',
  imports:  [CommonModule, ProductFilterPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers:[ProductService]
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService, private productService: ProductService){}
  filterText="";
   products:Product[]
   addToCart(product:Product){
   this.alertifyService.success(product.name + " sepete eklendi.")
   
  }
  public ngOnInit():void{
    this.productService.getProducts().subscribe((products:Product[])=> this.products = products)
  }
}
