import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: '', redirectTo: 'products', pathMatch: "full" },
    { path: 'products/category/:categoryId', component: ProductComponent },
    { path: 'product-add-1', component: ProductComponent },
    { path: 'product-add-2', component: ProductComponent }
];
