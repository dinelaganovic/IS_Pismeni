import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Radnik } from '../model/radnik';
import { Observable } from 'rxjs';

@Injectable()
export class RadnikService {

constructor(private http: HttpClient) { }

getSportiste():Observable<any>{
  const url = "https://localhost:7093/getAll";
  return this.http.get<any>(url);
}
getSportisteById(id: number):Observable<any>{
  const url = `https://localhost:7093/GetById/${id}`;
  return this.http.get<any>(url);
}
getKlub(id: number):Observable<any>{
  const url = `https://localhost:7093/GetKlub/${id}`;
  return this.http.get<any>(url);
}

Update(sportista: any): Observable<any>{
  const url = "https://localhost:7093/Update";
  return this.http.put<any>(url, sportista);
}

dodajSportistu(sportista: Radnik): Observable<any>{
  const url = "https://localhost:7093/dodaj_sportistu";
  return this.http.post<any>(url, sportista);
}

}
