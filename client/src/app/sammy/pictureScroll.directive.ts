import {
    Directive,
    Input,
    ElementRef,
    Renderer2,
    HostListener,
    Output,
    EventEmitter,
    OnInit,
} from '@angular/core';

@Directive({
    selector: '[appPictureScroll]',
})
export class PictureScrollDirective implements OnInit {
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

    ngOnInit(): void {
        if (this.tp >= this.windowHeight * this.pagePicturePosition) {
            this.pictureInPosition.emit(false);
        } else {
            this.pictureInPosition.emit(true);
        }
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
        if (this.tp < this.windowHeight * this.pagePicturePosition) {
            this.pictureInPosition.emit(false);
        } else {
            this.pictureInPosition.emit(true);
        }
    }
}
