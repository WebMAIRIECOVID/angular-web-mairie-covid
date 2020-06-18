import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { DatePipe } from '@angular/common';
import { Utilisateur } from './interfaces/utilisateur';
import { PostLogin } from './interfaces/post-login';
import { MessageService } from './message.service';

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
  constructor( private http: HttpClient, private datepipe: DatePipe,private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_Login = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/login.php';
  private apiUrl_Register = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/register.php';
  
  login(mail,mdp) {
    return this.http.get<any>(this.proxyurl + `${this.apiUrl_Login}` + '?mail=' + mail + '&mdp=' + mdp);
  }

  register(formData:PostLogin) : Observable<PostLogin> {
    console.log(JSON.stringify(formData));
    console.log(this.messageService);
    return this.http.post<any>( this.apiUrl_Register, JSON.stringify(formData),this.httpOptions).pipe(
      tap((newPostLogin: PostLogin) => this.log(`added utilisateur w/ mail=${newPostLogin.mail}`)),
      catchError(this.handleError<PostLogin>('register'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}