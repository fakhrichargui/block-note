import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  @Input() title!: string;
  @Input() body!: string;
  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;


  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.truncator && this.bodyText) {
        const style = window.getComputedStyle(this.bodyText.nativeElement, null);
        const viewableHeight = +style.getPropertyValue('height');
  
        if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
          this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
        } else {
          this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
        }
      }
    }
  }
}
