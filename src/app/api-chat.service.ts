import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { DatePipe } from '@angular/common';
import { Message } from './interfaces/message';
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
  private apiUrl_ChatGet = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/chatGet.php';
  private apiUrl_ChatPost = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/chatPost.php';
  //private apiUrl_ChatGet = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/chatGet.php';
  //private apiUrl_ChatPost = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/chatPost.php';
  
  getChat() {
    return this.http.get<any>(this.apiUrl_ChatGet);
  }

  addChat(formData:Message) : Observable<Message> {
    console.log(JSON.stringify(formData));
    console.log(this.messageService);
    return this.http.post<any>(this.apiUrl_ChatPost, JSON.stringify(formData),this.httpOptions).pipe(
      tap((newMsg: Message) => this.log(`added message w/ texte=${newMsg.texte}`)),
      catchError(this.handleError<Message>('posterMs'))
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