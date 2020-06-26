import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, ValidatorFn, ValidationErrors, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MustMatch } from '../../constantes/must-match.validator';

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
  cpassword:FormControl;
  cat:FormControl;

  submitted = false;

  constructor(private apiUtilisateursService: ApiUtilisateursService, private formBuilder: FormBuilder) { 

    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.cpassword = new FormControl('', [
      Validators.required
    ]);
    this.cat = new FormControl('', [
      Validators.required
    ]);
    this.identifiant = new FormControl('', [
      Validators.required
    ]);

    this.formGroup = new FormGroup({
      pseudo: this.identifiant,
      mail: this.email,
      mdp: this.password,
      cmdp: this.cpassword,
      categorie: this.cat
    });
  }
  @Input() ins;

  ngOnInit() {
  }

  closeForm() {
    this.ins = false;
  }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }
  onSubmit() {
        this.submitted = true;
        
        // stop here if form is invalid
        if (this.formGroup.invalid) {
            return;
        }
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
    onReset() {
        this.submitted = false;
        this.formGroup.reset();
    }

  matcher = new MyErrorStateMatcher();


}