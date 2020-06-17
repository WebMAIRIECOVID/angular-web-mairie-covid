import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Pays } from '../interfaces/pays';
import { ApiStatistiquesService } from '../api-statistiques.service';
import { Subscription } from 'rxjs';

@Component({

  selector: 'app-chiffres-par-pays',
  templateUrl: './chiffres-par-pays.component.html',
  styleUrls: ['./chiffres-par-pays.component.css']
})

export class ChiffresParPaysComponent implements OnInit, OnDestroy {

  public apiSubscription: Subscription;
  public listePays: Pays[] = [];
  public paysChoisi = "";
  @Output() selectionPays: EventEmitter<string> = new EventEmitter<string>();

  constructor(private apiStatistiquesService: ApiStatistiquesService) { }

  ngOnInit(): void {
    this.apiSubscription = this.apiStatistiquesService.getPays().subscribe((response) => {
      this.listePays = response;
    }, (error) => {
      alert('Erreur API selectionner pays');
    });
  }

  ngOnDestroy(): void {
    if (this.apiSubscription) { this.apiSubscription.unsubscribe(); }
  }
  
  public selectionnerPays(event) {
    if(!(event.target.value === "Selectionner un pays"))
    {
      this.paysChoisi = event.target.value;
    } else {
      this.paysChoisi = "";
    }
    this.selectionPays.emit(event.target.value);
  }

}