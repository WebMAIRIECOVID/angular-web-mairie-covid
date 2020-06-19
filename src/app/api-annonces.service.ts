import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Annonce } from './interfaces/annonce';

@Injectable()
export class ApiAnnoncesService {
  constructor( private http: HttpClient, private datepipe: DatePipe) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_AnnoncesGet = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annoncesGet.php';
  private apiUrl_AnnoncesPost = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annoncesPost.php';
  
  getClassifiedAd() {
    return this.http.get<any>(this.apiUrl_AnnoncesGet);
  }

  addClassifiedAd(formData:Annonce) {
    return this.http.post<any>(this.apiUrl_AnnoncesPost, JSON.stringify(formData),this.httpOptions);
  }
}