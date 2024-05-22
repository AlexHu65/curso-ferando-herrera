import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent {

  alert:string = 'alert-danger';
  loading:boolean  = false;
  propiedades = {
    danger: false
  }

  ejecutar() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 );
  }

}
