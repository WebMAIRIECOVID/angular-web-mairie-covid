import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiAnnoncesService } from '../../../../api-annonces.service';
import { LoginComponent } from '../../../../header/login/login.component';
import { SessionService } from '../../../../session.service';
import { Annonce } from '../../../../interfaces/annonce';


@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;
  annonce:Annonce;

  constructor(private apiAnnoncesService: ApiAnnoncesService, private sessionService: SessionService) { 
    this.formGroup = new FormGroup({
      texte: new FormControl(),
      titre: new FormControl(),
    });
    this.ajout = true;
  }

  ngOnInit() {
    this.ajout = false;
  }

  onSubmit() {
    console.log("Annonce submitted");
    this.annonce = { texte: this.formGroup.get('texte').value, titre: (this.formGroup.get('titre').value), auteur: this.sessionService.getId()};
    console.log(this.annonce);
    this.apiAnnoncesService.addClassifiedAd(this.annonce).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API login');
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