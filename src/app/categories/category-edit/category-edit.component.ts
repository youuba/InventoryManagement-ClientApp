import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { CategoryFormComponent } from '../category-form/category-form.component';
// import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
 
  category!: Category;
  categoryForm!: FormGroup;
  
  constructor(
    // c
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.categoryForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['']
    // });
   }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(id).subscribe(category => {
      this.category = category;
      this.categoryForm = this.fb.group({
        name: [this.category.name, Validators.required],
        description: [this.category.description]
      });
      console.log(this.categoryForm.value);
    });
  }
 
  onUpdateCategory() {
    this.categoryService.updateCategory(this.category).subscribe(() => {
      this.router.navigate(['/category']);
    });

  }
} 