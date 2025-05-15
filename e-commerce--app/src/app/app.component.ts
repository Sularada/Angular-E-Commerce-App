import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce--app';
}
