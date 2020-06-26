import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';
import { SessionService } from '../../session.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Globals } from '../../variablesGlobales/globals';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;
  id:number;
  session:Utilisateur;
  email:FormControl;
  password:FormControl;
  constructor(private apiUtilisateursService: ApiUtilisateursService,private sessionService: SessionService, public globals: Globals) { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.formGroup = new FormGroup({
      mail: this.email,
      mdp: this.password,
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
  
  matcher = new MyErrorStateMatcher();
}