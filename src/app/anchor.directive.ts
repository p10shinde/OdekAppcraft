import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective {

  constructor(private viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef);
   }

}
