import { Injectable } from '@angular/core';
import { Utilisateur } from './interfaces/utilisateur';

@Injectable()
export class SessionService {

  mail:String;
  connect:boolean;
  utilisateur:Utilisateur;

  constructor() {
    this.mail = "anonyme@gmail.com";
    this.connect = false;
  }

}