import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyeffect]'
})
export class MyeffectDirective {

  @Input() appMyEffect = ''
  @Input() outColor = ''
  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.color = "darkgreen";
    this.element.nativeElement.style.width = "20vw"
  }

  @HostListener('mouseover')
  mouseHover(){
    this.element.nativeElement.style.backgroundColor = this.outColor;
  }
  @HostListener('mouseout')
  mouseExit(){
    this.element.nativeElement.style.backgroundColor = this.appMyEffect;
  }
}
