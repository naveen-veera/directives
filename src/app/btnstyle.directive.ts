import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBtnstyle]'
})
export class BtnstyleDirective {

  constructor(private el : ElementRef) { 
    el.nativeElement.style.fontSize = '15px';
  }

  colr:string = '';

  @Input() defaultColor: string;

  @Input('appBtnstyle') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.dehighlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = "white";
    if(color==="blue") {
      this.el.nativeElement.style.fontWeight = "bold";
      this.el.nativeElement.style.fontSize = "25px";
    }
    else if(color==="green") {
      this.el.nativeElement.style.fontWeight = "bold";
      this.el.nativeElement.style.fontSize = "35px";
    }
    else if(color==='maroon') {
      this.el.nativeElement.style.fontWeight = "bold";
      this.el.nativeElement.style.fontSize = "45px";
    }
  }

  private dehighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = "black";
    this.el.nativeElement.style.fontWeight = "lighter";
    this.el.nativeElement.style.fontSize = "15px";
  }

}
