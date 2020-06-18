import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiUtilisateursService: ApiUtilisateursService) { }

  co:boolean;
  ins:boolean;

  ngOnInit() {
    this.co = false;
    this.ins = false; 
  }

  openFormSignIn() {
    this.apiUtilisateursService.setCo(true);
  }

  openFormSignUp() {
    this.apiUtilisateursService.setIns(true);
  }

  closeForm() {
    this.apiUtilisateursService.setCo(false);
    this.apiUtilisateursService.setIns(false);
  }

}