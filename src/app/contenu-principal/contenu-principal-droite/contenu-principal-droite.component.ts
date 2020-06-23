import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INFOSPRATIQUES } from '../../constantes/informations-pratiques';
import { Globals } from '../../variablesGlobales/globals';


@Component({
  selector: 'app-contenu-principal-droite',
  templateUrl: './contenu-principal-droite.component.html',
  styleUrls: ['./contenu-principal-droite.component.css']
})
export class ContenuPrincipalDroiteComponent implements OnInit {

  infos = INFOSPRATIQUES;
  chat: boolean;
  public globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
  }

  ngOnInit() {
    this.chat = false;
  }

  openChat() {
    if(this.globals.id){
      this.chat = true;
    }
    else {
      this.pasCo();
    }
  }
  
  pasCo() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

}