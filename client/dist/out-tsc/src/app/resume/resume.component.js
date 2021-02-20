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
// Angular imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(route) {
        this.route = route;
        // font awesome icons
        this.faHome = free_solid_svg_icons_1.faHome;
        this.faPhone = free_solid_svg_icons_1.faPhone;
        this.faEnvelope = free_solid_svg_icons_1.faEnvelope;
        this.faPython = free_brands_svg_icons_1.faPython;
        this.faAngular = free_brands_svg_icons_1.faAngular;
        this.faJS = free_brands_svg_icons_1.faJsSquare;
        this.faJava = free_brands_svg_icons_1.faJava;
        this.faFacebook = free_brands_svg_icons_1.faFacebook;
        this.faTwitter = free_brands_svg_icons_1.faTwitter;
        this.faInstagram = free_brands_svg_icons_1.faInstagram;
        this.faLinkedin = free_brands_svg_icons_1.faLinkedin;
        this.faGithub = free_brands_svg_icons_1.faGithub;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.pictureURL = data['pic'];
            _this.resumeURL = data['resume'];
        });
    };
    ResumeComponent = __decorate([
        core_1.Component({
            selector: 'app-resume',
            templateUrl: './resume.component.html',
            styleUrls: ['./resume.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map