import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
  };

  constructor(private http: HttpClient) { }

  public login(email): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email } ,
      this.httpOptions);
  }

  public getToken(): string {
    return localStorage.getItem('auth');
  }

  public setToken(token): void {
    localStorage.setItem('auth', token);
  }
}
