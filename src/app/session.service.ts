import { Injectable } from '@angular/core';
import { Utilisateur } from './interfaces/utilisateur';

@Injectable()
export class SessionService {

  id:number;
  utilisateur:Utilisateur;

  constructor() {
  }

  setSession(newId,newUtilisateur)
  {
    this.id = newId;
    console.log(this.id);
    this.utilisateur = newUtilisateur;
  }

  getId()
  {
    return this.id;
  }

}