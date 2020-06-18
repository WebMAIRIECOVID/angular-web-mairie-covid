import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiUtilisateursService: ApiUtilisateursService) { }

  @Input() co;

  ngOnInit() { 
  }

  closeForm() {
    this.co = false;
  }
  
  login(form){
      console.log(form.value);
  }
}