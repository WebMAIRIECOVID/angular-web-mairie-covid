import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private apiStatistiquesService: ApiUtilisateursService) { }

  co: boolean;
  ins: boolean;

  ngOnInit() {
    this.co = false;
    this.ins = false;
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