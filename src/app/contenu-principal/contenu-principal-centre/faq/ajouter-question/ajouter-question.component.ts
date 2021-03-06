import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ApiChatService } from '../../../../api-chat.service';
import { SessionService } from '../../../../session.service';
import { Question } from '../../../../interfaces/question';
import { Globals } from '../../../../variablesGlobales/globals';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
  text:FormControl;

  submitted = false;
  @Output() changement: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor( private apiChatService: ApiChatService, private sessionService: SessionService, globals: Globals) { 
    this.text = new FormControl('', [
      Validators.required
    ]);
    this.formGroup = new FormGroup({
      texte: this.text
    });
    this.ajout = true;
    this.globals = globals;
  }

  ngOnInit() {
    this.ajout = false;
    if(this.globals.id)
    {
      this.globals.alert = false;
    } else {
      this.globals.alert = true;
    }
  }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.formGroup.invalid) {
        return;
    }
    console.log("Question submitted");
    this.question = { texte: this.formGroup.get('texte').value, auteur: this.globals.id};
    console.log(this.question);
    this.apiChatService.addQuestion(this.question).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API chat');
    });
    this.ajout = false;
    this.changement.emit(false);
  }
  
  onReset() {
      this.submitted = false;
      this.formGroup.reset();
  }

  closeForm() {
    this.ajout = false;
  }

  openForm() {
    this.ajout = true;
  }
  matcher = new MyErrorStateMatcher();
  
  close() {
    this.globals.alert = false;
  }


}