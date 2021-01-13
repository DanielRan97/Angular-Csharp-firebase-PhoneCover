import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesapiService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.categoryApi}/${id}`)
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categoryApi);
  }

  addCategory(category: Category) {
    return this.http.post(environment.categoryApi, category)
  }

  editCategory(newParams,id) {
    return this.http.put(`${environment.categoryApi}${id}`, newParams)
  }

  deleteCategory(id) {
    return this.http.delete(`${environment.categoryApi}` + id)
  }







}
