import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [CategoryService]
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) { }
  categories: Category[]
  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => this.categories = categories)
  }
}
