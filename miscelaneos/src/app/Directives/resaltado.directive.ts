import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") newColor:string | any;

  constructor(private el: ElementRef) {
    // El el es todo el elemento padre donde se manda llamar la directiva
    console.log('Directiva llamada')
  }

  @HostListener('mouseenter') mouseEnter(){
    this.resaltar(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave(){
    this.resaltar(null);
  }


  private resaltar(color:string | null){
    this.el.nativeElement.style.backgroundColor = color;
    
  }

}
