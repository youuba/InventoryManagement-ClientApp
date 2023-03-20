import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[]=[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  onDeleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(()=>
        this.categories = this.categories.filter((category) => category.id !== categoryId));
      }

      // onEditCategory(id: number) {
      //   this.router.navigate(['/category/update', id]);
      // }

      // onAddCategory() {
      //   this.router.navigate(['/category/create']);
      // }
}