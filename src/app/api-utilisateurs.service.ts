import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Utilisateur } from './interfaces/utilisateur';
import { PostLogin } from './interfaces/post-login';

@Injectable({
  providedIn: 'root'
})

export class ApiUtilisateursService {
/*
  //constructor( private http: HttpClient, private datepipe: DatePipe) { }
  
  loginForm: FormGroup = new FormGroup({
    pseudo: new FormControl(),
    mail: new FormControl(),
    mdp: new FormControl(),
    categorie:  new FormControl()
  }, { updateOn: 'submit' });
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_Login = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/login.php';
  private apiUrl_Register = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/register.php';
  
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
  */
  constructor( private http: HttpClient, private datepipe: DatePipe) { }
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_Login = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/login.php';
  private apiUrl_Register = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/register.php';

  connection (formData: PostLogin): Observable<any> {
    console.log(formData);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'mon-jeton'
    })
  };
  return this.http.post<any>(this.proxyurl + `${this.apiUrl_Login}`, formData, httpOptions);
  }

  
  login(formData) {
    console.log(formData);
    // On envoie les données via une requête HTTP POST.
    return this.http.post<any>(this.proxyurl + `${this.apiUrl_Login}`, {mail:'pru',mdp:'test'});
  }

  register(formData) {
    console.log(formData);
    // On envoie les données via une requête HTTP POST.
    return this.http.post<any>(this.proxyurl + `${this.apiUrl_Register}`, formData);
  }

}