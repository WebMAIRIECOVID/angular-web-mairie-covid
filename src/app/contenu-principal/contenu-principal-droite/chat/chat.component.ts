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

  constructor(private apiChatService: ApiChatService, public globals: Globals) {
    this.formGroup = new FormGroup({
      message: new FormControl(),
    });
  }

  @Input() chat;

  ngOnInit() { 
  }

  closeChat() {
    this.chat = false;
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