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
  p: number;
  @Input() categorie;
  @Output() resultatAnnonces: EventEmitter<ResultatAnnoncesComponent> = new EventEmitter<ResultatAnnoncesComponent>();

  constructor(private apiPublicationsService: ApiPublicationsService){
    this.p = 1;
  }

  ngOnInit() {
    
    this.apiPublicationsService.getClassifiedAd(this.categorie).subscribe((response) => {
      console.log(response);
      this.items = response["annonces"];
    }, (error) => {
      alert('Erreur API get annonces');
    });
    this.resultatAnnonces.emit(this);
    
  }


}