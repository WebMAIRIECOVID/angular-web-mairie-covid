import { Component, OnInit, Type } from '@angular/core';
import { ApiUtilisateursService } from '../api-utilisateurs.service';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">"John Doe"</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}

const MODALS: {[name: string]: Type<any>} = {
  focusFirst: NgbdModalConfirm,
  autofocus: LoginComponent
};


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private apiStatistiquesService: ApiUtilisateursService, private _modalService: NgbModal) { }

  co: boolean;
  ins: boolean;

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

  open(name: string) {
    this._modalService.open(MODALS[name]);
  }

}