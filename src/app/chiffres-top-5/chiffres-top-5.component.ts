import { Component, OnInit, OnChanges } from '@angular/core';
import { DataStats } from '../interfaces/dataStats';
import { ApiStatistiquesService } from '../api-statistiques.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-chiffres-top-5',
  templateUrl: './chiffres-top-5.component.html',
  styleUrls: ['./chiffres-top-5.component.css']
})
export class ChiffresTop5Component implements OnInit {
  
  /*Constructeur*/
  constructor(private apiStatistiquesService: ApiStatistiquesService, private el:ElementRef) { }
  
  /*Donnees graphique circulaire*/
  public view;
  public last_update = "";
  public offset = 0;
  public tabResultat: DataStats[] = [];

  /*Graphique circulaire*/
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#CFC0BB']
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
    this.apiStatistiquesService.getTotalPays().subscribe((response) => {
      
      this.last_update = response[0]["last_update"];
      let nom: string = "";
      let valeur: number = 0;

      for (var i = 0; i < 5; i++) {
        nom = response[i]["country"];
        valeur = response[i]["cases"];
        let res = {} as DataStats;
        res.name = nom;
        res.value = valeur;
        this.tabResultat.push(res);
      }
      console.log(this.tabResultat);
      Object.assign(this, this.tabResultat);
    });
  }

  /*Redimentionnement de la page*/
  onResize(event) {
    this.offset = event.target.innerWidth * (55/100);
    this.vue(this.offset);
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