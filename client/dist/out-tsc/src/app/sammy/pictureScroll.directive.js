"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PictureScrollDirective = /** @class */ (function () {
    function PictureScrollDirective(elr, renderer) {
        this.elr = elr;
        this.renderer = renderer;
        this.pictureInPosition = new core_1.EventEmitter();
        this.tp = this.elr.nativeElement.getBoundingClientRect().top;
        this.windowHeight = window.innerHeight;
        this.setProps();
    }
    PictureScrollDirective.prototype.ngOnInit = function () {
        if (this.tp >= this.windowHeight * this.pagePicturePosition) {
            this.pictureInPosition.emit(false);
        }
        else {
            this.pictureInPosition.emit(true);
        }
    };
    PictureScrollDirective.prototype.onScroll = function (event) {
        this.tp = this.elr.nativeElement.getBoundingClientRect().top;
        this.setProps();
    };
    PictureScrollDirective.prototype.onResize = function (event) {
        this.windowHeight = window.innerHeight;
        this.setProps();
    };
    PictureScrollDirective.prototype.setProps = function () {
        if (this.tp < this.windowHeight * this.pagePicturePosition) {
            this.pictureInPosition.emit(false);
        }
        else {
            this.pictureInPosition.emit(true);
        }
    };
    __decorate([
        core_1.Input('pagePicturePosition'),
        __metadata("design:type", Number)
    ], PictureScrollDirective.prototype, "pagePicturePosition", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PictureScrollDirective.prototype, "pictureInPosition", void 0);
    __decorate([
        core_1.HostListener('window:scroll', ['event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PictureScrollDirective.prototype, "onScroll", null);
    __decorate([
        core_1.HostListener('window:resize', ['event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PictureScrollDirective.prototype, "onResize", null);
    PictureScrollDirective = __decorate([
        core_1.Directive({
            selector: '[appPictureScroll]',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], PictureScrollDirective);
    return PictureScrollDirective;
}());
exports.PictureScrollDirective = PictureScrollDirective;
//# sourceMappingURL=pictureScroll.directive.js.map