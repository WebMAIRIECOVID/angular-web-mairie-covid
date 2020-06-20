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