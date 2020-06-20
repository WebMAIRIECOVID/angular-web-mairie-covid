import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';
import { SessionService } from '../../session.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Utilisateur } from '../../interfaces/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;
  id:number;
  session:Utilisateur;
  constructor(private apiUtilisateursService: ApiUtilisateursService,private sessionService: SessionService) { 
    
  this.formGroup = new FormGroup({
    mail: new FormControl(),
    mdp: new FormControl(),
  });
  }

  @Input() co;

  ngOnInit() { 
  }

  closeForm() {
    this.co = false;
  }

  onSubmit() {
    /*console.warn(this.formGroup.value);
    console.log(this.formGroup.get('mail').value);
    console.log(this.formGroup.get('mdp').value);*/
    this.apiUtilisateursService.login(this.formGroup.get('mail').value, this.formGroup.get('mdp').value).subscribe((response) => {
      this.id = response['id'];
      console.log(response['id']);
      console.log(this.id);
      this.session = response['user'];
    }, (error) => {
      alert('Erreur API login');
    });
    this.co = false;
    this.sessionService.setSession(this.id,this.session);
  }
}