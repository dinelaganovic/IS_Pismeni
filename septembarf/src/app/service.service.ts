import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl:string = "https://localhost:7108/api/Vaspitacica/authenticate";

  constructor(private http: HttpClient) { }
  login(loginObj:any){
    return this.http.post<any>(this.baseUrl, loginObj)
  }
}






