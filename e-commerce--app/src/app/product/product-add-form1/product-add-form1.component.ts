import { Component } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../category/category';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-add-form1',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-add-form1.component.html',
  styleUrl: './product-add-form1.component.css',
  providers: [CategoryService],

})

export class ProductAddForm1Component {
  constructor(private categoryService: CategoryService) { }
  model: Product = {
    id: -1,
    categoryId: -1,
    description: "",
    imageUrl: "",
    name: "",
    price: "",
  };
  categories: Category[]
  name: string;
  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => this.categories = categories)
  }
  add(form: NgForm) {
    alert("name" + form.value.name)
    console.log("sdfs")
  }
}
