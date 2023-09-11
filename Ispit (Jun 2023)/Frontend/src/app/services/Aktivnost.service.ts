import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Aktivnost } from '../model/Aktivnost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AktivnostService {

constructor(private http: HttpClient) { }

getAktivnosti(): Observable<any>{
  const url = "https://localhost:7079/aktivnosti";
  return this.http.get<Aktivnost>(url);
}

getAktivnostById(id: number): Observable<any>{
  const url = `https://localhost:7079/aktivnost/${id}`;
  return this.http.get<Aktivnost>(url);
}

dodajAktivnost(akt: Aktivnost): Observable<any>{
  const url  = "https://localhost:7079/dodajAktivnost"
  return this.http.post<Aktivnost>(url, akt);
}


updateOpis(id: number, opis: string) {
  const url = `https://localhost:7079/azuriranje_aktivnosti/${id}/${opis}`;
  return this.http.put<any>(url, null);
}

}
