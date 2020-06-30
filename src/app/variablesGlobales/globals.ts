// globals.ts
import { Injectable } from '@angular/core';
import { Utilisateur } from './../interfaces/utilisateur';

@Injectable()
export class Globals {
  role: string = 'test';
  id: number;
  session:Utilisateur;
}