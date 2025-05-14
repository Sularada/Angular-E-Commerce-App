import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, CategoryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce--app';
}
