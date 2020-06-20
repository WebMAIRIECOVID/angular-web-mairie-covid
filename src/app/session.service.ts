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
    SessionService.id = newId;
    console.log(SessionService.id);
    SessionService.utilisateur = newUtilisateur;
  }

}