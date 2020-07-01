import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiChatService } from '../../../../../api-chat.service';
import { Globals } from '../../../../../variablesGlobales/globals';
import { ActualisationService } from '../../../../../actualisation.service';

@Component({
  selector: 'app-resultat-reponses',
  templateUrl: './resultat-reponses.component.html',
  styleUrls: ['./resultat-reponses.component.css']
})
export class ResultatReponsesComponent implements OnInit {

  items:any;
  p: number;
  @Input() quest: number;
  @Output() resultatReponses: EventEmitter<ResultatReponsesComponent> = new EventEmitter<ResultatReponsesComponent>();

  constructor(private apiChatService: ApiChatService, globals: Globals) 
  {
    this.p = 1;
  }

  ngOnInit() {
    this.apiChatService.getReponse().subscribe((response) => {
      console.log(response);
      this.items = response["reponses"];
    }, (error) => {
      alert('Erreur API get rep');
    });
    this.resultatReponses.emit(this);
  }
}