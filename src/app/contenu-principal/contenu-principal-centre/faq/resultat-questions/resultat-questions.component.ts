import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiChatService } from '../../../../api-chat.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Question } from '../../../../interfaces/question';
import { ActualisationService } from '../../../../actualisation.service';

@Component({
  selector: 'app-resultat-questions',
  templateUrl: './resultat-questions.component.html',
  styleUrls: ['./resultat-questions.component.css']
})

export class ResultatQuestionsComponent implements OnInit {

  items:any;
  p: number = 1;
  actualisation: boolean;

  constructor(private actualisationService: ActualisationService, private apiChatService: ApiChatService) {
      this.actualisationService.actualiserFAQ.subscribe( value => {
          this.actualisation = value;
      });
  }

  ngOnInit() {

    this.apiChatService.getQuestion().subscribe((response) => {
      console.log(response);
      this.items = response["questions"];
    }, (error) => {
      alert('Erreur API get questions');
    });
    
  }
}