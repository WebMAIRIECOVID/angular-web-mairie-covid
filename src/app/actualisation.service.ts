import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResultatAnnoncesComponent } from './contenu-principal/contenu-principal-centre/annonces/resultat-annonces/resultat-annonces.component';
import { ResultatQuestionsComponent } from './contenu-principal/contenu-principal-centre/faq/resultat-questions/resultat-questions.component';
import { ResultatReponsesComponent } from './contenu-principal/contenu-principal-centre/faq/resultat-questions/resultat-reponses/resultat-reponses.component';

@Injectable()
export class ActualisationService {

  resActuA: ResultatAnnoncesComponent;
  resActuQ: ResultatQuestionsComponent;
  resActuR: ResultatReponsesComponent;
  public resA: BehaviorSubject<ResultatAnnoncesComponent> = new BehaviorSubject<ResultatAnnoncesComponent>(this.resActuA);
  public resQ: BehaviorSubject<ResultatQuestionsComponent> = new BehaviorSubject<ResultatQuestionsComponent>(this.resActuQ);
  public resR: BehaviorSubject<ResultatReponsesComponent> = new BehaviorSubject<ResultatReponsesComponent>(this.resActuR); 

}