import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonce:String;
  role:String;  
  changement: boolean;

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
    this.changement = true;
  }
}