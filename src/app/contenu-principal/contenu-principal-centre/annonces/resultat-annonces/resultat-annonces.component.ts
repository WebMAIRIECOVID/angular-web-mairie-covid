import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITEMSEXANNONCES } from '../../../../constantes/items-exemples-annonces';
import { ApiPublicationsService } from '../../../../api-publications.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-resultat-annonces',
  templateUrl: './resultat-annonces.component.html',
  styleUrls: ['./resultat-annonces.component.css']
})
export class ResultatAnnoncesComponent implements OnInit {

  items:any;
  p: number = 1;
  @Input() categorie;

  constructor(private apiPublicationsService: ApiPublicationsService) {
  }

  ngOnInit() {
    
    this.apiPublicationsService.getClassifiedAd(this.).subscribe((response) => {
      console.log(response);
      this.items = response["annonces"];
    }, (error) => {
      alert('Erreur API get annonces');
    });
    
  }
  

}