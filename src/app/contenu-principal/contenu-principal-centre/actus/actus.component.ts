import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actus',
  templateUrl: './actus.component.html',
  styleUrls: ['./actus.component.css']
})
export class ActusComponent implements OnInit {

  information:String;
  constructor() { }

  ngOnInit() {
  this.information="information";
  }

}