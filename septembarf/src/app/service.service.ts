import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = "https://localhost:7108/api/Vaspitacica";

  constructor(private http: HttpClient) { }

  login(loginObj: any) {
    return this.http.post<any>(this.baseUrl, loginObj)
      .pipe(
        catchError(this.handleError) // Dodaj obradu grešaka
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Ovde možete obraditi grešku, npr. logirati je ili prikazati korisniku
    console.error('An error occurred:', error.error);
    return throwError('Something went wrong. Please try again later.');
  }
}






