import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultat } from './interfaces/chiffres-resultat';
import { Pays } from './interfaces/pays';
import { ResDept } from './interfaces/resultDepartement';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ApiStatistiquesService {


  constructor( private http: HttpClient, private datepipe: DatePipe) {
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

  private apiUrl3 = 'https://covid19-api.org/api/status?date='; 

  public getTotalPays() {
    let date: Date = new Date();
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl3}${this.datepipe.transform(date, 'yyyy-MM-dd')}`);
  }

  private apiUrl4 = 'https://dashboard.covid19.data.gouv.fr/data/date-';

  public getInformationsDep() {
    let date: Date = new Date();
    return this.http.get<ResDept[]>(this.proxyurl + `${this.apiUrl4}${this.datepipe.transform(date.setDate(date.getDate() - 1), 'yyyy-MM-dd')}` + '.json');
  }

  private apiUrl5 = 'https://raw.githubusercontent.com/etalab/dashboard-aides-entreprises/master/backend/json/aides/aides-maille-regional-minify.json';
}