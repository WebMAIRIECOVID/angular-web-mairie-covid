import { Component, OnInit, Input } from '@angular/core';
import { ApiUtilisateursService } from '../../api-utilisateurs.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup:FormGroup;
  constructor(private apiUtilisateursService: ApiUtilisateursService) { 
    this.formGroup = new FormGroup({
      pseudo: new FormControl(),
      mail: new FormControl(),
      mdp: new FormControl(),
      categorie: new FormControl(),
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
    this.apiUtilisateursService.register(this.formGroup.get('pseudo').value, this.formGroup.get('mail').value, this.formGroup.get('mdp').value, this.formGroup.get('categorie').value)
			.then(function(data){
				console.log(data);
			});
  }

}