import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[bold]',
})
export class BoldDirective {
  @HostBinding('style.fontWeight')
  bold = 'bold';
}
