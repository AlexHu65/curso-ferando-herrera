import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size.px': tamano }">
      Hola mundo desde angular
    </p>

    <p [style.fontSize]="'40px'">
      Hola mundo desde angular
    </p>

    <p [style.fontSize.px]= "tamano">
      Hola mundo desde angular
    </p>

    <button class="btn btn-primary m-1" (click)="( tamano < 15 ? tamano = tamano + 5 : tamano)">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary m-1" (click)="( tamano > 5 ? tamano = tamano - 5 : tamano)">
      <i class="fa fa-minus"></i>
    </button>
  `
})
export class NgStyleComponent {

  public tamano:number = 5;

}
