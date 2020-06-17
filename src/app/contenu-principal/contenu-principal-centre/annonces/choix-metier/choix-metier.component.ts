import { Component, OnInit } from '@angular/core';
import { ITEMSMETIERS } from '../../../../constantes/items-choix-metier';

@Component({
  selector: 'app-choix-metier',
  templateUrl: './choix-metier.component.html',
  styleUrls: ['./choix-metier.component.css']
})
export class ChoixMetierComponent implements OnInit {

  items = ITEMSMETIERS;
  
  constructor() { }

  ngOnInit() {
  }

}