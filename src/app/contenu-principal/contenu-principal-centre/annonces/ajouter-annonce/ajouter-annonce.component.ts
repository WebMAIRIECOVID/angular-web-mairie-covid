import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiAnnoncesService } from '../../../../api-annonces.service';
import { LoginComponent } from '../../../../header/login/login.component';
import { SessionService } from '../../../../session.service';


@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  formGroup:FormGroup;
  ajout:boolean;

  constructor(private apiAnnoncesService: ApiAnnoncesService, private sessionService: SessionService) { 
    this.formGroup = new FormGroup({
      texte: new FormControl(),
      titre: new FormControl(),
      auteur: new FormControl(this.sessionService.getId()),
    });
    this.ajout = true;
  }

  ngOnInit() {
    this.ajout = false;
  }

  onSubmit() {
    console.log("Annonce submitted");
    console.log(this.sessionService.getId());
    this.apiAnnoncesService.addClassifiedAd(this.formGroup.value).subscribe((response) => {
          console.log(this.sessionService.getId());

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