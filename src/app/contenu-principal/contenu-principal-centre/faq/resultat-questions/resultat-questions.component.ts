import { Component, OnInit } from '@angular/core';
import { ApiChatService } from '../../../../api-chat.service';


@Component({
  selector: 'app-resultat-questions',
  templateUrl: './resultat-questions.component.html',
  styleUrls: ['./resultat-questions.component.css']
})
export class ResultatQuestionsComponent implements OnInit {

  items:any;
  p: number = 1;

  constructor(private apiAnnoncesService: ApiAnnoncesService) {
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