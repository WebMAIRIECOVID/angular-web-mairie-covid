import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';
import { Globals } from '../../variablesGlobales/globals';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private dataSharingService: DataSharingService, public globals: Globals) { }

  ngOnInit() {
  }

  deco()
  {
    this.dataSharingService.isUserLoggedIn.next(false);
      this.changedSession(null,null);
  }
  
  private changedSession(id, session) {
    this.globals.id = id;
    this.globals.session = session;
  }
  

}