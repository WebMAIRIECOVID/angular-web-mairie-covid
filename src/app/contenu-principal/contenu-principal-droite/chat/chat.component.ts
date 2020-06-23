import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Globals } from '../../../variablesGlobales/globals';
import { ApiChatService } from '../../../api-chat.service';
import { Question } from '../../../interfaces/question';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  formGroup:FormGroup;
  question:Question;
  public globals: Globals;

  constructor(private apiChatService: ApiChatService, globals: Globals) {
    this.formGroup = new FormGroup({
      texte: new FormControl(),
    });
    this.chat = true;
    this.globals = globals;
  }

  @Input() chat;

  ngOnInit() { 
    this.chat = false;
  }

  openChat() {
    if(this.globals.id){
      this.chat = true;
    }
    else {
      this.pasCo();
    }
  }

  closeChat() {
    this.chat = false;
  }
  
  pasCo() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
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
    this.chat = false;
  }

}