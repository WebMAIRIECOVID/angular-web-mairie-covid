import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { ApiStatistiquesService } from '../../api-statistiques.service';
import { Resultat } from '../../interfaces/chiffres-resultat';
import { DataStats } from '../../interfaces/dataStats';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-resultat-recherche-pays',
  templateUrl: './resultat-recherche-pays.component.html',
  styleUrls: ['./resultat-recherche-pays.component.css']
})
export class ResultatRecherchePaysComponent implements OnInit {

  @Input() pays;
  public cases = 0;
  public deaths = 0;
  public recovered = 0;
  public last_update = "";
  public resultat: Resultat[] = [];
  public jour = 0;
  public view;
  public offset = 0;
  public tabResultat: DataStats[] = [
          { name: 'Cas', value: 0 },
          { name: 'Décès', value: 0 },
          { name: 'Guérisson', value: 0 }
        ];

  constructor(
    private apiStatistiquesService: ApiStatistiquesService, private el:ElementRef
  ) { }
  
  /*Graphique circulaire*/
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Status';
  showYAxisLabel = true;
  yAxisLabel = 'Homme';

  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

  colorScheme = {
    domain: ['#C7B42C', '#A10A28', '#5AA454']
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.offset = window.innerWidth * (55/100);
    if(this.el.nativeElement.offsetWidth != 0)
    {
      let viewTmp: number[] = [this.el.nativeElement.offsetWidth - 100, 400];
      this.view = viewTmp;
    } else {
      let viewTmp: number[] = [this.offset, 400];
      this.view = viewTmp;
    }
    if (this.pays) {
      this.apiStatistiquesService.getInformationsPays(this.pays).subscribe((response) => {
        
        this.resultat = response;
        this.last_update = response[0]["last_update"];

        this.tabResultat = [
          { name: 'Cas', value: response[0]["cases"] },
          { name: 'Décès', value: response[0]["deaths"] },
          { name: 'Guérisson', value: response[0]["recovered"] }
        ];

        Object.assign(this, this.tabResultat );
      });
    }
  }

  public changerDeJour(hierOuDemain)
  {
    if(hierOuDemain === 'hier')
    {
      if(this.jour  < this.resultat.length)
      {
        this.jour = this.jour + 1;
      }
    } else {
      if(this.jour != 0)
      {
        this.jour = this.jour - 1;
      }
    }
    this.last_update = this.resultat[this.jour]["last_update"];
    this.tabResultat = [
          { name: 'Cas', value: this.resultat[this.jour]["cases"] },
          { name: 'Décès', value: this.resultat[this.jour]["deaths"] },
          { name: 'Guérisson', value: this.resultat[this.jour]["recovered"] }
        ];
    Object.assign(this, this.tabResultat );
  }
  
  /*Redimentionnement de la page*/
  onResize(event) {
   console.log(event.target.innerWidth);
   this.offset = event.target.innerWidth * (55/100);
    if(this.el.nativeElement.offsetWidth != 0)
    {
      let viewTmp: number[] = [this.el.nativeElement.offsetWidth - 100, 400];
      this.view = viewTmp;
    } else {
      let viewTmp: number[] = [this.offset, 400];
      this.view = viewTmp;
    }
  }

}