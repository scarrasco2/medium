import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FeedResponse } from '../models/feed-response';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<FeedResponse> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<FeedResponse>(fullUrl);
  }
}
