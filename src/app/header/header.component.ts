import { Component, OnInit } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  co: boolean;
  ins: boolean;

  constructor(private apiStatistiquesService: ApiUtilisateursService) { }

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

  connection() {
    this.apiStatistiquesService.connection().subscribe((response) => {
      console.log(response);
    });
  }

}