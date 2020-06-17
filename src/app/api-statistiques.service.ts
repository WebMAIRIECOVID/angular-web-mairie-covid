import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultat } from './interfaces/chiffres-resultat';
import { Pays } from './interfaces/pays';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ApiStatistiquesService {

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl = 'https://covid19-api.org/api/timeline/';

  constructor( private http: HttpClient, private datepipe: DatePipe) { }

  public getInformationsPays(pays) {
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl}${pays}`);
  }
  
  private apiUrl2 = 'https://covid19-api.org/api/countries'; 

  public getPays() {
    return this.http.get<Pays[]>(this.proxyurl + `${this.apiUrl2}`);
  }

  private apiUrl3 = 'https://covid19-api.org/api/status?date='; 

  public getTotalPays() {
    let date: Date = new Date();
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl3}${this.datepipe.transform(date, 'yyyy-MM-dd')}`);
  }
}