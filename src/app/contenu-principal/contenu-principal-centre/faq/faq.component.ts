import { Component, OnInit } from '@angular/core';
import { ResultatQuestionsComponent } from './resultat-questions/resultat-questions.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  changement: boolean;
  resultatQuestions: ResultatQuestionsComponent;
  constructor() {
  }

  ngOnInit() {
  }

  actualisation(value)
  {
    this.changement = value;
    setTimeout(() => this.resultatQuestions.ngOnInit(), 1000);
  }

  initialiser(resQ)
  {
    this.resultatQuestions = resQ;
  }

}