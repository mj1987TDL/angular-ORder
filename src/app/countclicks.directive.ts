import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appCountclicks]'
})
export class CountclicksDirective {
  numberOfClicks = 0;
  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    alert(this.numberOfClicks++);
    //console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 }
}
