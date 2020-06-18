import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiUtilisateursService: ApiUtilisateursService) { }

  co:boolean;
  ins:boolean;

  ngOnInit() {
    this.co = false;
    this.ins = false; 
  }

  openFormSignIn() {
    this.apiUtilisateursService.setCo(true);
    this.co = true;
  }

  openFormSignUp() {
    this.apiUtilisateursService.setIns(true);
    this.ins = true;
  }

  closeForm() {
    this.apiUtilisateursService.setCo(false);
    this.co = false;
    this.apiUtilisateursService.setIns(false);
    this.ins = false;
  }


}