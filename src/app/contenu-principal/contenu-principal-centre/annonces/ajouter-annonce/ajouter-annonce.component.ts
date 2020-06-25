import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiPublicationsService } from '../../../../api-publications.service';
import { LoginComponent } from '../../../../header/login/login.component';
import { SessionService } from '../../../../session.service';
import { Annonce } from '../../../../interfaces/annonce';
import { Globals } from '../../../../variablesGlobales/globals';


@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;
  annonce:Annonce;
  public globals: Globals;
  @Input() categorie;

  constructor(private apiPublicationsService: ApiPublicationsService, private sessionService: SessionService, globals: Globals) { 
    this.formGroup = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      texte: new FormControl(null, [Validators.required])
    });
    this.ajout = true;
    this.globals = globals;
  }

  ngOnInit() {
    this.ajout = false;
  }

  onSubmit() {
    console.log("Annonce submitted");
    this.annonce = { texte: this.formGroup.get('texte').value, titre: (this.formGroup.get('titre').value),  auteur: this.globals.id, categorie:this.categorie};
    console.log(this.annonce);
    this.apiPublicationsService.addClassifiedAd(this.annonce).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API annonce');
    });
    this.ajout = false;
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
}