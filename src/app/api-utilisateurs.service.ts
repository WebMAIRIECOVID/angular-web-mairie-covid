import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ApiUtilisateursService {
/*
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl = 'https://covid19-api.org/api/timeline/';

  constructor( private http: HttpClient, private datepipe: DatePipe) { }

  public getInformationsPays(pays) {
    return this.http.get<Resultat[]>(this.proxyurl + `${this.apiUrl}${pays}`);
  }*/
  
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_Login = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/login.php';
  private apiUrl_Register = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/register.php';

  constructor( private http: HttpClient, private datepipe: DatePipe) { }

  public connection() {
    return this.http.get<Utilisateur>(this.proxyurl + `${this.apiUrl_Login}`);
  }
}