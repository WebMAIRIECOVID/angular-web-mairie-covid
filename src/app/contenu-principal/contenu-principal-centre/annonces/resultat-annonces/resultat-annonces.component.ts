import { Component, OnInit } from '@angular/core';
import { ITEMSEXANNONCES } from '../../../../constantes/items-exemples-annonces';

@Component({
  selector: 'app-resultat-annonces',
  templateUrl: './resultat-annonces.component.html',
  styleUrls: ['./resultat-annonces.component.css']
})
export class ResultatAnnoncesComponent implements OnInit {

  items = ITEMSEXANNONCES;
  config: any;
  collection = { count: 60, data: [] };

  constructor() {

    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
  }
  

}