import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openFormSignIn() {
    document.getElementById("myFormSignIn").style.display = "block";
  }

  openFormSignUp() {
    document.getElementById("myFormSignUp").style.display = "block";
  }

  closeForm() {
    document.getElementById("myFormSignIn").style.display = "none";
    document.getElementById("myFormSignUp").style.display = "none";
  }

}