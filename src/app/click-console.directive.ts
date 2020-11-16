import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[cc]'
})
export class ClickConsoleDirective {

  @HostListener('click')
  onClick(){
    console.log('click');
  }

  constructor() { }

}
