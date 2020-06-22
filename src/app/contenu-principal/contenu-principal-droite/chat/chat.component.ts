import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Globals } from '../../../variablesGlobales/globals';
import { ApiChatService } from '../../../api-chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  formGroup:FormGroup;
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
    this.chat = true;
  }

  closeChat() {
    this.chat = false;
  }
  
  question() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  onSubmit() {
    /*console.warn(this.formGroup.value);
    console.log(this.formGroup.get('mail').value);
    console.log(this.formGroup.get('mdp').value);*/
    this.apiChatService.addChat(this.formGroup.value).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API login');
    });
    this.chat = false;
  }

}