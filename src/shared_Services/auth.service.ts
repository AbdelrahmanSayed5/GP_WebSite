import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  isAuth:boolean=false;
  signin(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
    //i want to add post request by rx library to check if the user is valid or not
  }
  signup(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data);
  }

}
