import { Component, OnInit } from '@angular/core';
import { INFOSPRATIQUES } from '../../constantes/informations-pratiques';

@Component({
  selector: 'app-contenu-principal-droite',
  templateUrl: './contenu-principal-droite.component.html',
  styleUrls: ['./contenu-principal-droite.component.css']
})
export class ContenuPrincipalDroiteComponent implements OnInit {

  infos = INFOSPRATIQUES;
  constructor() { }

  chat: boolean;

  ngOnInit() {
    this.chat = false;
  }


  openChat() {
    this.chat = true;
  }

  closeChat() {
    this.chat = false;
  }
  
  question() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

}