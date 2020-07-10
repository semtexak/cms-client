import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {
    console.log(this.constructor.name);
  }
  
  getCategories(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/categories`);
  }
}
