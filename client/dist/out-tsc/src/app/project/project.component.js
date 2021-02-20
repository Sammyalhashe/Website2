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
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var project_animations_1 = require("./project.animations");
var rxjs_1 = require("rxjs");
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        // font awesome icons
        this.faGithub = free_brands_svg_icons_1.faGithub;
        this.faCode = free_solid_svg_icons_1.faCode;
    }
    ProjectComponent.prototype.onResize = function ($event) {
        this.innerWidth = $event.target.innerWidth;
    };
    ProjectComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], ProjectComponent.prototype, "projects", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProjectComponent.prototype, "onResize", null);
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.css'],
            animations: [project_animations_1.animationList],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map