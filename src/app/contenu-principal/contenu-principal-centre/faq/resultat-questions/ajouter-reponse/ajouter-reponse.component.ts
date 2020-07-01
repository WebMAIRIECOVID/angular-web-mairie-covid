import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ApiChatService } from '../../../../../api-chat.service';
import { SessionService } from '../../../../../session.service';
import { Reponse } from '../../../../../interfaces/reponse';
import { Question } from '../../../../../interfaces/question';
import { Globals } from '../../../../../variablesGlobales/globals';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResultatReponsesComponent } from '../resultat-reponses/resultat-reponses.component';
import { ActualisationService } from '../../../../../actualisation.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-ajouter-reponse',
  templateUrl: './ajouter-reponse.component.html',
  styleUrls: ['./ajouter-reponse.component.css']
})
export class AjouterReponseComponent implements OnInit {

  formGroup:FormGroup;
  @Input() item: number;
  @Input() ajout: boolean;
  reponse: Reponse;
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
  }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.formGroup.invalid) {
        return;
    }
    console.log("Reponse submitted");
    console.log(this.item[0]);
    this.reponse = { texte: this.formGroup.get('texte').value, auteur: this.globals.id, question: this.item[0]};
    console.log(this.reponse);
    this.apiChatService.addReponse(this.reponse).subscribe((response) => {
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
}