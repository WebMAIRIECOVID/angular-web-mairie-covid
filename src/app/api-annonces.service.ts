import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './interfaces/utilisateur';
import { PostLogin } from './interfaces/post-login';

@Injectable()
export class ApiAnnoncesService {
  constructor( private http: HttpClient, private datepipe: DatePipe,private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  proxyurl = "https://cors-anywhere.herokuapp.com/";
  private apiUrl_AnnoncesGet = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annoncesGet.php';
  private apiUrl_AnnoncesPost = 'https://dwarves.iut-fbleau.fr/~pruvost/WebMAIRIECOVID/android_login_api/annoncesPo.php';
  
  login(mail,mdp) {
    return this.http.get<any>(this.apiUrl_Login + '?mail=' + mail + '&mdp=' + mdp);
  }

  register(formData:PostLogin) : Observable<PostLogin> {
    console.log(JSON.stringify(formData));
    console.log(this.messageService);
    return this.http.post<any>(this.apiUrl_Register, JSON.stringify(formData),this.httpOptions).pipe(
      tap((newPostLogin: PostLogin) => this.log(`added utilisateur w/ mail=${newPostLogin.mail}`)),
      catchError(this.handleError<PostLogin>('register'))
    );
  }
}