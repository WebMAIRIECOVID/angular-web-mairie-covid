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

  changement: boolean;
  resultatReponses: ResultatReponsesComponent;
  items:any;
  p: number;
  @Output() resultatQuestions: EventEmitter<ResultatQuestionsComponent> = new EventEmitter<ResultatQuestionsComponent>();

  constructor( private apiChatService: ApiChatService) {
    this.resultatQuestions.emit(this);
    this.changement = true;
    this.p = 1;
  }

  ngOnInit() {

    this.apiChatService.getQuestion().subscribe((response) => {
      console.log(response);
      this.items = response["questions"];
    }, (error) => {
      alert('Erreur API get questions');
    }); 
  }
  
  actuali(value)
  {
    this.changement = value;
    setTimeout(() => this.resultatReponses.ngOnInit(), 1000);
  }

  initi(resR)
  {
    this.resultatReponses = resR;
  }
}