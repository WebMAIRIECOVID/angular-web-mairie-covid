import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiChatService } from '../../../../api-chat.service';
import { SessionService } from '../../../../session.service';
import { Question } from '../../../../interfaces/question';
import { Globals } from '../../../../variablesGlobales/globals';


@Component({
  selector: 'app-ajouter-question',
  templateUrl: './ajouter-question.component.html',
  styleUrls: ['./ajouter-question.component.css']
})
export class AjouterQuestionComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;
  question:Question;
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
    console.log("Question submitted");
    this.question = { texte: this.formGroup.get('texte').value, auteur: this.globals.id};
    console.log(this.question);
    this.apiChatService.addQuestion(this.question).subscribe((response) => {
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