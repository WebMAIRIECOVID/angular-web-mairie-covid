import { Component, OnInit } from '@angular/core';
import { ApiStatistiquesService } from '../api-statistiques.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ResDept } from '../interfaces/resultDepartement';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-chiffres-departements',
  templateUrl: './chiffres-departements.component.html',
  styleUrls: ['./chiffres-departements.component.css']
})
export class ChiffresDepartementsComponent implements OnInit {
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  resultat:ResDept[];
  p: number = 1;
  constructor(private apiStatistiquesService: ApiStatistiquesService, private el:ElementRef) { }

  ngOnInit() {
      this.apiStatistiquesService.getInformationsDep().subscribe((response) => {
        this.resultat = response;
        console.log(response);
      });
  }

}