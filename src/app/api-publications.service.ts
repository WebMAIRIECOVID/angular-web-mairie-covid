import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { DatePipe } from '@angular/common';
import { Annonce } from './interfaces/annonce';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ApiPublicationsService {
  constructor( private http: HttpClient, private datepipe: DatePipe, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_AnnoncesGet = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annonceGet.php';
  private apiUrl_AnnoncesPost = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annoncePost.php';
  //private apiUrl_AnnoncesGet = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/annonceGet.php';
  //private apiUrl_AnnoncesPost = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/annoncePost.php';
  
  getClassifiedAd(categorie) {
    return this.http.get<any>(this.apiUrl_AnnoncesGet+"?categorie="+categorie);
  }

  addClassifiedAd(formData:Annonce) : Observable<Annonce> {
    console.log(JSON.stringify(formData));
    console.log(this.messageService);
    return this.http.post<any>(this.apiUrl_AnnoncesPost, JSON.stringify(formData),this.httpOptions).pipe(
      tap((newAnnonce: Annonce) => this.log(`added publication w/ titre=${newAnnonce.titre}`)),
      catchError(this.handleError<Annonce>('poster'))
    );
  }
  

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