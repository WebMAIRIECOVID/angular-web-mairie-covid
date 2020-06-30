import { Injectable } from '@angular/core';
import { ResultatQuestionsComponent } from '../contenu-principal/contenu-principal-centre/faq/resultat-questions/resultat-questions.component';
import { ResultatAnnoncesComponent } from '../contenu-principal/contenu-principal-centre/annonces/resultat-annonces/resultat-annonces.component';
import { ResultatReponsesComponent } from '../contenu-principal/contenu-principal-centre/faq/resultat-questions/resultat-reponses/resultat-reponses.component';

@Injectable()
export class Actualisation {
  resA: ResultatAnnoncesComponent;
  resQ: ResultatQuestionsComponent;
  resR: ResultatReponsesComponent;
}