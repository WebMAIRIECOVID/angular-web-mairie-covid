import { Injectable } from '@angular/core';
import { Utilisateur } from './interfaces/utilisateur';

@Injectable()
export class SessionService {

  mail:tring;
  connect:boolean;

  constructor() {
    this.mail = "anonyme@gmail.com";
    this.connect = false;
  }

}