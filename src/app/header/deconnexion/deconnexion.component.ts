import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit() {
  }

  deco()
  {
    this.dataSharingService.isUserLoggedIn.next(true);
  }

}