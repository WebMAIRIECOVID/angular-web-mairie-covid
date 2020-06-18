import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiUtilisateursService: ApiUtilisateursService) { }

  @Input() ins;

  ngOnInit() {
  }

  closeForm() {
    this.ins = false;
  }


}