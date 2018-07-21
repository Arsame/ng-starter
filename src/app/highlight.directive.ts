import { Directive, ElementRef, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input("appHighlight") status: string;

  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.undoHighlight();
  }
  
  private highlight() {
    if(this.status == 'single'){
      this.el.nativeElement.style.backgroundColor = 'red';
    }else if(this.status == 'married'){
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
 
  }
  
  private undoHighlight() {
    this.el.nativeElement.style.backgroundColor = null;
  }
 

}
