import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';
import { SessionService } from '../../session.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Globals } from '../../variablesGlobales/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;
  id:number;
  session:Utilisateur;
  constructor(private apiUtilisateursService: ApiUtilisateursService,private sessionService: SessionService, public globals: Globals) { 
    
    this.formGroup = new FormGroup({
      mail: new FormControl(),
      mdp: new FormControl(),
    });
  }

  @Input() co;

  ngOnInit() { 
  }

  //ngOnChanges() {
  //  this.co = true;
  //}

  closeForm() {
    this.co = false;
  }

  onSubmit() {
    /*console.warn(this.formGroup.value);
    console.log(this.formGroup.get('mail').value);
    console.log(this.formGroup.get('mdp').value);*/
    this.apiUtilisateursService.login(this.formGroup.get('mail').value, this.formGroup.get('mdp').value).subscribe((response) => {
      this.id = response['id'];
      this.session = response['user'];
      this.changedSession(this.id,this.session);
    }, (error) => {
      alert('Erreur API login');
    });
    this.co = false;
  }
  
  private changedSession(id, session) {
    this.globals.id = id;
    this.globals.session = session;
  }
}