import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';
import { NgForm } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

isUserLoggedIn: boolean;

  constructor(private dataSharingService: DataSharingService, private apiStatistiquesService: ApiUtilisateursService) {

      // Subscribe here, this will automatically update 
      // "isUserLoggedIn" whenever a change to the subject is made.
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
          this.isUserLoggedIn = value;
      });
  }

  co: boolean;
  ins: boolean;

  ngOnInit() {
  }

  openFormSignIn() {
    this.co = true;
  }

  openFormSignUp() {
    this.ins = true;
  }

  closeForm() {
    this.co = false;
    this.ins = false;
  }

}