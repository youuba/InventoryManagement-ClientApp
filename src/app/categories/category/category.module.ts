import { NgModule } from '@angular/core';
import { CategoryService } from './category.service';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from '../category-create/category-create/category-create.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
import { CategoryDetailComponent } from './category-detail/category-detail/category-detail.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
  ],

  imports: [
   RouterModule.forChild([
    { path: '', component: CategoryComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'create', component: CategoryCreateComponent },
    { path: 'edit/:id', component: CategoryEditComponent },
    { path: 'category/:id', component: CategoryDetailComponent }
  ]),

  CommonModule,ReactiveFormsModule,FormsModule
  ],
  
  exports: [
    CategoryComponent,
    CategoryFormComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDetailComponent
  ],
  providers: [CategoryService]
},)
export class CategoryModule { }
