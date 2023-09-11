import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl="https://localhost:7132/api/App";
  private baseUrl1="https://localhost:7132/api/App/";

  constructor(private http:HttpClient) { }
  sacuvaj(obj:any){
   return  this.http.post<any>(this.baseUrl, obj)
  }
  svipolasci(){
    return this.http.get(this.baseUrl)
  }
  pretrazi(p:string, p1:string, p2:string){
    const url = `${this.baseUrl1}search/${p}/${p1}/${p2}`;
    return this.http.get(url);
  }
}
