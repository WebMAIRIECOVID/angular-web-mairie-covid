import { Component, OnInit } from '@angular/core';
import { ApiStatistiquesService } from '../api-statistiques.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ElementRef} from '@angular/core';

@Component({
  selector: 'app-chiffres-departements',
  templateUrl: './chiffres-departements.component.html',
  styleUrls: ['./chiffres-departements.component.css']
})
export class ChiffresDepartementsComponent implements OnInit {

  constructor(private apiStatistiquesService: ApiStatistiquesService, private el:ElementRef) { }

  ngOnInit() {
      this.apiStatistiquesService.getInformationsDep().subscribe((response) => {
        
      });
  }

}