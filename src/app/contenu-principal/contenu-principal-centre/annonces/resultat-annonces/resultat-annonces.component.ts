import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITEMSEXANNONCES } from '../../../../constantes/items-exemples-annonces';
import { ApiPublicationsService } from '../../../../api-publications.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActualisationService } from '../../../../actualisation.service';

@Component({
  selector: 'app-resultat-annonces',
  templateUrl: './resultat-annonces.component.html',
  styleUrls: ['./resultat-annonces.component.css']
})
export class ResultatAnnoncesComponent implements OnInit {

  items:any;
  p: number = 1;
  @Input() categorie;
  actualisation: boolean;

  constructor(private actualisationService: ActualisationService, private apiPublicationsService: ApiPublicationsService) {
      this.actualisationService.actualiserPublication.subscribe( value => {
          this.actualisation = value;
      });
  }

  ngOnInit() {
    
    this.apiPublicationsService.getClassifiedAd(this.categorie).subscribe((response) => {
      console.log(response);
      this.items = response["annonces"];
    }, (error) => {
      alert('Erreur API get annonces');
    });
    
  }
  

}