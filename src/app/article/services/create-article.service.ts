import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/shared/models/article';
import { ArticleRequest } from 'src/app/shared/models/article-request';
import { ArticleResponse } from 'src/app/shared/models/article-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(articleRequest: ArticleRequest): Observable<Article> {
    const fullUrl = environment.apiUrl + '/articles';

    return this.http
      .post<ArticleResponse>(fullUrl, articleRequest)
      .pipe(map((response) => response.article));
  }
}
