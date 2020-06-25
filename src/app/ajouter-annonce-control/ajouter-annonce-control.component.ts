import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { AjouterAnnonceComponent } from '../contenu-principal/contenu-principal-centre/annonces/ajouter-annonce/ajouter-annonce.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ajouter-annonce-control',
  templateUrl: './ajouter-annonce-control.component.html',
  styleUrls: ['./ajouter-annonce-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AjouterAnnonceComponent,
      multi: true
    }
  ]
})
export class AjouterAnnonceControlComponent implements OnInit, ControlValueAccessor {
  @Input() progress;
  onChange: Function;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }

  ngOnInit() {
  }

}