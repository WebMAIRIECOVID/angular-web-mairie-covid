import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiAnnoncesService } from '../../../../api-annonces.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;
  constructor(private apiAnnoncesService: ApiAnnoncesService) { 
    this.formGroup = new FormGroup({
      texte: new FormControl(),
      titre: new FormControl(),
    });
    this.ajout = true;
  }

  ngOnInit() {
  }

  onSubmit() {

  }

  closeForm() {
    this.ajout = false;
  }

  openForm() {
    this.ajout = true;
  }
}