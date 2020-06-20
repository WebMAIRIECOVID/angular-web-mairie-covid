import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiAnnoncesService } from '../../../../api-annonces.service';
import { SessionService } from '../../../../session.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;
  service:SessionService;
  id:number = this.service.getId();

  constructor(private apiAnnoncesService: ApiAnnoncesService) { 
    this.formGroup = new FormGroup({
      texte: new FormControl(),
      titre: new FormControl(),
      auteur: new FormControl(this.id),
    });
    this.ajout = true;
  }

  ngOnInit() {
    this.ajout = false;
  }

  onSubmit() {
    console.log("Annonce submitted");
    console.log(this.id);
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