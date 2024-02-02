import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderScroll]'
})
export class HeaderScrollDirective {
  private lastScrollTop: number = 0;

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const st = window.scrollY;
    
    if(st > this.lastScrollTop){
      this.elementRef.nativeElement.style.transform = 'translateY(-100%)';
    } else {
      this.elementRef.nativeElement.style.transform = 'translateY(0)';
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

}
