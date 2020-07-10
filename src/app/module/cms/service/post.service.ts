import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) {
    console.log(this.constructor.name);
  }
  
  getArchive(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }

  getPost(slug: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts/${slug}`);
  }
}
