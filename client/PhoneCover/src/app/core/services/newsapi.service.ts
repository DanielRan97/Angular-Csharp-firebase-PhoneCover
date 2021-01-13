import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../models/news';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<News> {
    return this.http.get<News>(`${environment.newsApi}/${id}`)
  }

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(environment.newsApi);
  }

  addNews(News: News) {
    return this.http.post(environment.newsApi, News)
  }

  editNews(newParams, id) {
    return this.http.put(`${environment.newsApi}${id}`, newParams)
  }

  deleteNews(id) {
    return this.http.delete(`${environment.newsApi}` + id)
  }


}
