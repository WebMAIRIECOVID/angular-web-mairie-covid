import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiAnnoncesService } from '../../../../api-annonces.service';
import { SessionService } from '../../../../session.service';
import { id } from '@swimlane/ngx-charts';

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
      auteur: new FormControl(id),
    });
    this.ajout = true;
  }

  ngOnInit() {
    this.ajout = false;
  }

  onSubmit() {
    console.log("Annonce submitted");
    console.log(i);
    this.apiAnnoncesService.addClassifiedAd(this.formGroup.value).subscribe((response) => {
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