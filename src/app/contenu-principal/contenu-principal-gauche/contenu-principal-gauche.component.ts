import { Component, OnInit } from '@angular/core';
import { InfosImportantes } from '../../interfaces/informations-importantes';
import { LISTEINFOSIMPORTANTES } from '../../constantes/liste-infos-importantes';

@Component({
  selector: 'app-contenu-principal-gauche',
  templateUrl: './contenu-principal-gauche.component.html',
  styleUrls: ['./contenu-principal-gauche.component.css']
})
export class ContenuPrincipalGaucheComponent implements OnInit {

  infos = LISTEINFOSIMPORTANTES;

  constructor() { }

  ngOnInit() {
  }

}