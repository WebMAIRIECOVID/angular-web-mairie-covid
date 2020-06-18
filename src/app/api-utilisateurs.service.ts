import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Utilisateur } from './interfaces/utilisateur';

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
  
  login(formData) {
    // On envoie les données via une requête HTTP POST.
    return this.http.post(this.proxyurl + `${this.apiUrl_Login}`, formData);
  }

  register(formData) {
    // On envoie les données via une requête HTTP POST.
    return this.http.post(this.proxyurl + `${this.apiUrl_Register}`, formData);
  }

}