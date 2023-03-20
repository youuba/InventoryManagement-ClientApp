import { Component, EventEmitter, Input,Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Category } from '../category/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  @Input() formTitle!: string;
  @Input() submitButtonText!: string;
  @Input() category!: Category;
  @Output() formSubmit = new EventEmitter<Category>();
  @Input() categoryForm!: FormGroup; // define input property

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['',Validators.required]
    });
  }

  onSubmit() {
    const category: Category = this.categoryForm.value;
    this.formSubmit.emit(category);
    this.categoryForm.reset();
  }
}