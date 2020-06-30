import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';
import { Globals } from '../../variablesGlobales/globals';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  isUserLoggedIn: boolean;
  constructor(private dataSharingService: DataSharingService, public globals: Globals) { 
      // Subscribe here, this will automatically update 
      // "isUserLoggedIn" whenever a change to the subject is made.
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
      });
  }

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