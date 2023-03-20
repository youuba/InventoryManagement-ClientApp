import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  private readonly apiBaseUrl  = 'https://localhost:7041/categories';

  constructor(private readonly http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiBaseUrl +'/GetAllCategories');
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(this.apiBaseUrl +'/GetCategoryById?id='+id);
  }

  createCategory(category: Category): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl +'/CreateCategory',category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(this.apiBaseUrl +'/DeleteCategory?id='+id);
  }

  updateCategory(category: Category): Observable<any> {
    return this.http.put<any>(this.apiBaseUrl+"/UpdateCategory", category);
  }

  
}
