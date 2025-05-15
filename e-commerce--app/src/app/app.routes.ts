import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';

export const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: '', redirectTo: 'products', pathMatch: "full" },
    { path: 'products/category/:categoryId', component: ProductComponent },
    { path: 'product-add-1', component: ProductAddForm1Component },
    { path: 'product-add-2', component: ProductAddForm1Component }
];
