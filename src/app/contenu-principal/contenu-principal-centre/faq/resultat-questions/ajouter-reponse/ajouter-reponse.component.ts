import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiChatService } from '../../../../../api-chat.service';
import { SessionService } from '../../../../../session.service';
import { Reponse } from '../../../../../interfaces/reponse';
import { Question } from '../../../../../interfaces/question';
import { Globals } from '../../../../../variablesGlobales/globals';

@Component({
  selector: 'app-ajouter-reponse',
  templateUrl: './ajouter-reponse.component.html',
  styleUrls: ['./ajouter-reponse.component.css']
})
export class AjouterReponseComponent implements OnInit {

  formGroup:FormGroup;
  @Input() item: Question;
  @Input() ajout: boolean;
  reponse: Reponse;
  public globals: Globals;

  constructor(private apiChatService: ApiChatService, private sessionService: SessionService, globals: Globals) { 
    this.formGroup = new FormGroup({
      texte: new FormControl(),
    });
    this.ajout = true;
    this.globals = globals;
  }

  ngOnInit() {
    this.ajout = false;
  }

  onSubmit() {
    console.log("Reponse submitted");
    this.reponse = { texte: this.formGroup.get('texte').value, auteur: this.globals.id, question: this.item};
    console.log(this.reponse);
    this.apiChatService.addReponse(this.reponse).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API chat');
    });
    this.ajout = false;
  }

  closeForm() {
    this.ajout = false;
  }

  openForm() {
    this.ajout = true;
  }
}