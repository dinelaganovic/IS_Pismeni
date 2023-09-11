import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl:string = "https://localhost:7108/api/Vaspitacica/authenticate";
  private baseUrl1:string="https://localhost:7108/api/Vaspitacica";
  constructor(private http: HttpClient) { }
  login(loginObj:any){
    return this.http.post<any>(this.baseUrl, loginObj)
  }
  getUciteljice(){
    return this.http.get<any>(this.baseUrl1);
  }
  saveDete(deteObj:any){
    return this.http.post<any>(`${this.baseUrl}sacuvajdete`,deteObj)
  }
}






