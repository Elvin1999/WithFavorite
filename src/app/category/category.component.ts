import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  repository: CategoryRepository;

  constructor() {
      this.repository=new CategoryRepository();
      this.categories=this.repository.getCategories();


  }

  ngOnInit() {}
}
