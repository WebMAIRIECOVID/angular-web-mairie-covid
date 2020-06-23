import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Question } from './interfaces/question';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ApiChatService {
  constructor( private http: HttpClient, private datepipe: DatePipe, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  //private apiUrl_QuestionGet = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/questionGet.php';
  //private apiUrl_QuestionPost = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/questionPost.php';
  private apiUrl_QuestionGet = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/questionGet.php';
  private apiUrl_QuestionPost = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/questionPost.php';
  
  getQuestion() {
    return this.http.get<any>(this.apiUrl_QuestionGet);
  }

  addQuestion(formData:Question) : Observable<Question> {
    console.log(JSON.stringify(formData));
    console.log(this.messageService);
    return this.http.post<any>(this.apiUrl_QuestionPost, JSON.stringify(formData),this.httpOptions).pipe(
      tap((newQuest: Question) => this.log(`added question w/ texte=${newQuest.texte}`)),
      catchError(this.handleError<Question>('posterMsg'))
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