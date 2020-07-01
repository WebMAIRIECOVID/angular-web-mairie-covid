import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ApiPublicationsService } from '../../../../api-publications.service';
import { LoginComponent } from '../../../../header/login/login.component';
import { SessionService } from '../../../../session.service';
import { Annonce } from '../../../../interfaces/annonce';
import { Globals } from '../../../../variablesGlobales/globals';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;
  isConnected:boolean;
  role:string;  
  annonce:Annonce;
  public globals: Globals;
  @Input() categorie;
  @Input() roleAttendu;
  title:FormControl;
  text:FormControl;

  submitted = false;
  @Output() changement: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private apiPublicationsService: ApiPublicationsService, private sessionService: SessionService, globals: Globals) { 
    this.title = new FormControl('', [
      Validators.required
    ]);
    this.text = new FormControl('', [
      Validators.required
    ]);

    this.formGroup = new FormGroup({
      titre: this.title,
      texte: this.text
    });
    this.ajout = true;
    this.globals = globals;
  }

  ngOnInit() {
    this.ajout = false;
    if(this.globals.session){
      this.changeRole();
    }
    if(this.role == this.roleAttendu) {
      this.isConnected = true;
    }
    else {
      this.isConnected = false;
    }
  }

  changeRole(){
    this.role = this.globals.session.categorie;
  }

    // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }
  
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.formGroup.invalid) {
        return;
    }
    console.log("Annonce submitted");
    this.annonce = { texte: this.formGroup.get('texte').value, titre: (this.formGroup.get('titre').value), auteur: this.globals.id, categorie:this.categorie};
    console.log(this.annonce);
    this.apiPublicationsService.addClassifiedAd(this.annonce).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API annonce');
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

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  matcher = new MyErrorStateMatcher();
}