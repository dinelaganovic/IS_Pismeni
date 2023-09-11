import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Radnik } from '../model/radnik';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadnikService {

constructor(private http: HttpClient) { }

getRadnike():Observable<any>{
  const url = "https://localhost:7074/getRadnike";
  return this.http.get<any>(url);
}

getRadnoMesto():Observable<any>{
  const url = "https://localhost:7074/getRadnikeSaRadnimMestom";
  return this.http.get<any>(url);
}

Filtriraj(filter: string):Observable<any>{
  const url = `https://localhost:7074/filtriraj/${filter}`;
  return this.http.get<any>(url);
}

dodajRadnika(radnik: Radnik): Observable<any>{
  const url  = "https://localhost:7074/dodaj_radnika"
  return this.http.post<Radnik>(url, radnik);
}


}
