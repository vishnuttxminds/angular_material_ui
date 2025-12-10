import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private baseUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers(limit: number, skip: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}&skip=${skip}`);
  }

  
}
