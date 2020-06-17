import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';

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
    console.log("true - co");
    console.log(this.co);
  }

  openFormSignUp() {
    this.ins = true;
    console.log("true - ins");
    console.log(this.ins);
  }

  closeForm() {
    this.co = false;
    this.ins = false;
  }

  connection() {
    this.apiStatistiquesService.connection().subscribe((response) => {
      console.log(response);
    });
  }

}