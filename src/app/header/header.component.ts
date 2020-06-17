import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connection: boolean;
  inscription: boolean;

  constructor() { }

  ngOnInit() {
  }

  openFormSignIn() {
    this.connection = true;
  }

  openFormSignUp() {
    this.inscription = true;
  }

  closeForm() {
    this.connection = false;
    this.inscription = false;
  }

}