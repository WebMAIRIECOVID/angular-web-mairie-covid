import { Component, OnInit } from '@angular/core';
import { ResultatAnnoncesComponent } from './resultat-annonces/resultat-annonces.component';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonce:String;
  role:String;  
  changement: boolean;
  resultatAnnonces: ResultatAnnoncesComponent;

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
    setTimeout(() => this.resultatAnnonces.ngOnInit(), 2000);
    
  }

  initialiser(resA)
  {
    this.resultatAnnonces = resA;
  }
}