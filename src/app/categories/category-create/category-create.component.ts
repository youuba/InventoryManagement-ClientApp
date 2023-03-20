import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';

@Component({
selector: 'app-category-create',
templateUrl: './category-create.component.html',
styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
categoryForm!: FormGroup;
formTitle: string = "Create Category";
submitBtnText: string = "Create";
 
constructor(
private formBuilder: FormBuilder,
private categoryService: CategoryService,
private router: Router
) {}

ngOnInit() {
this.buildForm();
console.log('hello from create component');
}

private buildForm() {
this.categoryForm = this.formBuilder.group({
name: ['', Validators.required],
description: ['']
});
}

onSubmit() {
const category: Category = this.categoryForm?.value;
this.categoryService.createCategory(category).subscribe(() => {
this.router.navigate(['/category']);
});
}
}