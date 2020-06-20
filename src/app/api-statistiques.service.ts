import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultat } from './interfaces/chiffres-resultat';
import { Pays } from './interfaces/pays';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ApiStatistiquesService {

  date: Date;

  constructor( private http: HttpClient, private datepipe: DatePipe) {
    this.date = new Date();
  }

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl = 'https://covid19-api.org/api/timeline/';
  
  public getInformationsPays(pays) {
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl}${pays}`);
  }
  
  private apiUrl2 = 'https://covid19-api.org/api/countries'; 

  public getPays() {
    return this.http.get<Pays[]>(this.proxyurl + `${this.apiUrl2}`);
  }

  private apiUrl3 = 'https://covid19-api.org/api/status?date='+this.datepipe.transform(this.date, 'yyyy-MM-dd'); 

  public getTotalPays() {
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl3}`);
  }

  private apiUrl4 = 'https://dashboard.covid19.data.gouv.fr/data/date-'+this.datepipe.transform(this.date, 'yyyy-MM-dd')+'.json'

  public getInformationsDep() {
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl3}`);
  }
}