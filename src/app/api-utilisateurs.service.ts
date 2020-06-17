import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Utilisateur } from './interfaces/utilisateur';
import { FormsModule, FormGroup } from '@angular/forms';

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

  constructor( private http: HttpClient, private datepipe: DatePipe) { }
  loginForm: FormGroup;
  
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_Login = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/login.php';
  private apiUrl_Register = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/register.php';

  /*
  public connection() {
    return this.http.post<Utilisateur>(this.proxyurl + `${this.apiUrl_Login}`);
  }

  public inscription() {
    return this.http.post<Utilisateur>(this.proxyurl + `${this.apiUrl_Register}`);
  }
  */
  
  login() {
    
    // On récupère les données du formulaire.
    const formData = this.loginForm.value;
    
    // On envoie les données via une requête HTTP POST.
    this.http.post(this.proxyurl + `${this.apiUrl_Login}`, formData);
  }
  register() {
    
    // On récupère les données du formulaire.
    const formData = this.loginForm.value;
    
    // On envoie les données via une requête HTTP POST.
    this.http.post(this.proxyurl + `${this.apiUrl_Register}`, formData);
  }
}