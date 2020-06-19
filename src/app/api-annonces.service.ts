import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DatePipe } from '@angular/common';
import { Annonce } from './interfaces/annonce';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Injectable()
export class ApiAnnoncesService {
  constructor( private http: HttpClient, private datepipe: DatePipe, private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  //private apiUrl_AnnoncesGet = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annonceGet.php';
  //private apiUrl_AnnoncesPost = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annoncePost.php';
  private apiUrl_AnnoncesGet = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/annonceGet.php';
  private apiUrl_AnnoncesPost = 'https://dwarves.iut-fbleau.fr/~thor/android_login_api/annoncePost.php';
  
  getClassifiedAd() {
    return this.http.get<any>(this.apiUrl_AnnoncesGet);
  }

  addClassifiedAd(formData:Annonce) : Observable<Annonce> {
    console.log(JSON.stringify(formData));
    console.log(this.messageService);
    return this.http.post<any>(this.apiUrl_AnnoncesPost, JSON.stringify(formData)
    );
  }
}