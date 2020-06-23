import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITEMSEXANNONCES } from '../../../../constantes/items-exemples-annonces';
import { ApiAnnoncesService } from '../../../../api-annonces.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-resultat-annonces',
  templateUrl: './resultat-annonces.component.html',
  styleUrls: ['./resultat-annonces.component.css']
})
export class ResultatAnnoncesComponent implements OnInit {

  items:any;
  p: number = 1;

  constructor(private apiAnnoncesService: ApiAnnoncesService) {
  }

  ngOnInit() {
    
    this.apiAnnoncesService.getClassifiedAd().subscribe((response) => {
      console.log(response);
      this.items = response["annonces"];
    }, (error) => {
      alert('Erreur API get annonces');
    });
    
  }
  

}