import { Component, OnInit, Input } from '@angular/core';
import { ApiChatService } from '../../../../../api-chat.service';

@Component({
  selector: 'app-resultat-reponses',
  templateUrl: './resultat-reponses.component.html',
  styleUrls: ['./resultat-reponses.component.css']
})
export class ResultatReponsesComponent implements OnInit {

  items:any;
  p: number = 1;
  @Input() quest: number;

  constructor(private apiChatService: ApiChatService) {
  }

  ngOnInit() {

    this.apiChatService.getReponse().subscribe((response) => {
      console.log(response);
      this.items = response["reponses"];
    }, (error) => {
      alert('Erreur API get rep');
    });
    
  }
}