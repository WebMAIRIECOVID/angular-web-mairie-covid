import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Globals } from '../../../variablesGlobales/globals';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  formGroup:FormGroup;

  constructor(public globals: Globals) { }

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
    this.apiUtilisateursService.login(this.formGroup.get('mail').value, this.formGroup.get('mdp').value).subscribe((response) => {
      this.id = response['id'];
      this.session = response['user'];
      this.changedSession(this.id,this.session);
    }, (error) => {
      alert('Erreur API login');
    });
    this.co = false;
  }
  
  private changedSession(id, session) {
    this.globals.id = id;
    this.globals.session = session;
  }

}