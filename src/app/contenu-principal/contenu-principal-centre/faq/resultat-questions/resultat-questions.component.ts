import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiChatService } from '../../../../api-chat.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Question } from '../../../../interfaces/question';
import { ActualisationService } from '../../../../actualisation.service';
import { ResultatReponsesComponent } from './resultat-reponses/resultat-reponses.component';

@Component({
  selector: 'app-resultat-questions',
  templateUrl: './resultat-questions.component.html',
  styleUrls: ['./resultat-questions.component.css']
})

export class ResultatQuestionsComponent implements OnInit {

  items:any;
  p: number = 1;
  changement: boolean;
  resultatReponses: ResultatReponsesComponent;

  constructor( private apiChatService: ApiChatService) {
  }

  ngOnInit() {

    this.apiChatService.getQuestion().subscribe((response) => {
      console.log(response);
      this.items = response["questions"];
    }, (error) => {
      alert('Erreur API get questions');
    }); 
  }
  
  actualisation(value)
  {
    this.changement = value;
    setTimeout(() => this.resultatReponses.ngOnInit(), 1000);
  }

  initialiser(resR)
  {
    this.resultatReponses = resR;
  }
}