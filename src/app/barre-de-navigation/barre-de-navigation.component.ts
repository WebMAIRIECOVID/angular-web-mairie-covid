import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ITEMSMENU } from '../constantes/item-menu';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.css']
})
export class BarreDeNavigationComponent implements OnInit {

  items = ITEMSMENU;

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}