import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl="https://localhost:7151/api/User/";
  private baseUrl1="https://localhost:7151/api/Aktivnosti/";
  constructor(private http: HttpClient) { }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login`, loginObj)
  }
  getSveListe(){
    return this.http.get<any[]>(`${this.baseUrl1}preuzmisve`);
  }
  sacuvajlistu(listaObj:any){
   return this.http.post<any>(`${this.baseUrl1}dodajaktivnost`, listaObj);
  }
}
