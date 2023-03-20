import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  {
    path: 'category',
    loadChildren: () => import('./app/categories/category/category.module').then(m => m.CategoryModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
