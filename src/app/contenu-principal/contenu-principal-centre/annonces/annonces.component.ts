import { Component, OnInit } from '@angular/core';
import { ResultatAnnoncesComponent } from './resultat-annonces/resultat-annonces.component';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  changement: boolean;
  resultatAnnonces: ResultatAnnoncesComponent;
  annonce:String;
  role:String;  

  constructor() {
    this.changement = true;
  }

  ngOnInit() {
    this.annonce = "annonce";
    this.role = "travailleur";
  }

  actualisation(value)
  {
    this.changement = value;
    setTimeout(() => this.resultatAnnonces.ngOnInit(), 1000);
  }

  initialiser(resA)
  {
    this.resultatAnnonces = resA;
  }
}