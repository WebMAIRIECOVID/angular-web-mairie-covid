import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statsmondiales',
  templateUrl: './statsmondiales.component.html',
  styleUrls: ['./statsmondiales.component.css']
})
export class StatsmondialesComponent implements OnInit {

  public paysChoisi;
  constructor() { }

  ngOnInit() {
  }

  public changerDePays(value) {
    this.paysChoisi = value;
  }

}