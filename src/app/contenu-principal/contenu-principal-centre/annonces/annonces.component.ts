import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonce:String;
  constructor() { }

  ngOnInit() {
    this.annonce = "annonce";
  }
}