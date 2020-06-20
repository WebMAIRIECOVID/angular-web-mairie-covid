import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITEMSEXANNONCES } from '../../../../constantes/items-exemples-annonces';
import { ApiAnnoncesService } from '../../../../api-annonces.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-resultat-annonces',
  templateUrl: './resultat-annonces.component.html',
  styleUrls: ['./resultat-annonces.component.css']
})
export class ResultatAnnoncesComponent implements OnInit {

  items:any;
    p: number = 1;
    collection: any[];  
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;

  constructor(private apiAnnoncesService: ApiAnnoncesService) {
  }


  ngOnInit() {
    
    this.apiAnnoncesService.getClassifiedAd().subscribe((response) => {
      console.log(response);
      this.items = response["annonces"];
    }, (error) => {
      alert('Erreur API get annonces');
    });
    
    for (let i = 1; i < this.items.length; i++) {
      console.log(this.items[i]);
      this.collection.push(this.items[i]);
    }
  }
  

}