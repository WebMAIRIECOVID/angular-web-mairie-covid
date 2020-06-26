import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup:FormGroup;

  identifiant:FormControl;
  email:FormControl;
  password:FormControl;
  cat:FormControl;
  constructor(private apiUtilisateursService: ApiUtilisateursService) { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.cat = new FormControl('', [
      Validators.required
    ]);
    this.identifiant = new FormControl('', [
      Validators.required
    ]);
    this.formGroup = new FormGroup({
      mail: this.email,
      mdp: this.password,
    });

    this.formGroup = new FormGroup({
      pseudo: this.identifiant,
      mail: this.email,
      mdp: this.password,
      categorie: this.cat,
    });
  }
  @Input() ins;

  ngOnInit() {
  }

  closeForm() {
    this.ins = false;
  }

  onSubmit() {
    /*console.warn(this.formGroup.value);
    console.log(this.formGroup.get('mail').value);
    console.log(this.formGroup.get('mdp').value);*/
    this.apiUtilisateursService.register(this.formGroup.value).subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Erreur API login');
    });
    this.ins = false;
  }

  matcher = new MyErrorStateMatcher();
  /*

  onSubmit() {
    this.apiUtilisateursService.register(this.formGroup.value)
			.then(function(data){
				console.log(data);
			});
  }*/ 

}