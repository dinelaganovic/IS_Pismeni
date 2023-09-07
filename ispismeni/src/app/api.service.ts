import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Interface } from './interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl="https://localhost:7101/api/User";
  constructor(private http: HttpClient) { }
  singUp(userObj:any){
     return  this.http.post<any>(`${this.baseUrl}save`, userObj);
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}post`,loginObj)
  }
  interfacefunkcija(){
   let  users:Interface={
    id:1,
    email:'email@gmail.com',
    password:'123456'
   }
  }
}
