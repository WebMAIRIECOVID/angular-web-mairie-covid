import { Component, OnInit, OnChanges } from '@angular/core';
import { DataStats } from '../interfaces/dataStats';
import { ApiStatistiquesService } from '../api-statistiques.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-chiffres-france',
  templateUrl: './chiffres-france.component.html',
  styleUrls: ['./chiffres-france.component.css']
})

export class ChiffresFranceComponent implements OnInit {
  
  /*Constructeur*/
  constructor(private apiStatistiquesService: ApiStatistiquesService, private el:ElementRef) { }
  
  /*Donnees graphique circulaire*/
  public view;
  public pays = "FR";
  public last_update = "";
  public offset = 0;
  public tabFrance: DataStats[] = [
          { name: 'Cas', value: 0 },
          { name: 'Décès', value: 0 },
          { name: 'Guérisson', value: 0 }
        ];

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

  ngOnInit(): void {
    this.offset = window.innerWidth * (55/100);
    this.vue(this.offset);
    if (this.pays) {
      this.apiStatistiquesService.getInformationsPays(this.pays).subscribe((response) => {
        
        this.last_update = response[0]["last_update"];

        this.tabFrance = [
              { name: 'Cas', value: response[0]["cases"] },
              { name: 'Décès', value: response[0]["deaths"] },
              { name: 'Guérisson', value: response[0]["recovered"] }
            ];
        console.log(this.tabFrance);
        Object.assign(this, this.tabFrance );
      });
    }
  }

  /*Redimentionnement de la page*/
  onResize(event) {
    this.offset = event.target.innerWidth * (55/100);
    this.vue(this.offset);
    Object.assign(this, this.tabFrance );
  }
  
  vue(largeur)
  {
    if(this.el.nativeElement.offsetWidth != 0)
    {
      this.view = [this.el.nativeElement.offsetWidth - 100, 400];
    } else {
      this.view = [largeur, 400];
    }
  }
}