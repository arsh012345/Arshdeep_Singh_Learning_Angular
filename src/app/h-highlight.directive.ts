import { Directive, ElementRef, HostListener , Input } from '@angular/core';

@Directive({
  selector: '[appHHighlight]',
  standalone: true
})
export class HHighlightDirective {
  @Input('appHHighlight') highlightColor: string = 'Pink';
  //it's a default colour I used
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
