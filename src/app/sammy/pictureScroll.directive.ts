import {
    Directive,
    Input,
    ElementRef,
    Renderer2,
    HostListener,
    Output,
    EventEmitter,
} from '@angular/core';

@Directive({
    selector: '[appPictureScroll]',
})
export class PictureScrollDirective {
    tp: number;
    windowHeight: number;
    @Input('pagePicturePosition')
    pagePicturePosition: number;
    @Output()
    pictureInPosition = new EventEmitter();

    constructor(private elr: ElementRef, private renderer: Renderer2) {
        this.tp = this.elr.nativeElement.getBoundingClientRect().top;
        this.windowHeight = window.innerHeight;
        this.setProps();
    }

    @HostListener('window:scroll', ['event'])
    onScroll(event): void {
        this.tp = this.elr.nativeElement.getBoundingClientRect().top;
        this.setProps();
    }

    @HostListener('window:resize', ['event'])
    onResize(event): void {
        this.windowHeight = window.innerHeight;
        this.setProps();
    }

    setProps(): void {
        // console.log('setting props');
        // console.log(this.tp <= this.windowHeight*this.pagePosition);
        if (this.tp <= this.windowHeight * this.pagePicturePosition) {
            this.pictureInPosition.emit(false);
        } else {
            this.pictureInPosition.emit(true);
        }
    }
}
