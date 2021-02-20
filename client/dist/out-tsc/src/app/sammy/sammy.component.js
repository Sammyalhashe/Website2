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
// FontAwesome imports
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var sammy_animations_1 = require("./sammy.animations");
var message_service_1 = require("../message.service");
var resumePicResolver_service_1 = require("../resume/resumePicResolver.service");
var SammyComponent = /** @class */ (function () {
    function SammyComponent(route, message, resume) {
        this.route = route;
        this.message = message;
        this.resume = resume;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        // icons used
        this.faTwitter = free_brands_svg_icons_1.faTwitter;
        this.faFacebook = free_brands_svg_icons_1.faFacebook;
        this.faInstagram = free_brands_svg_icons_1.faInstagram;
        this.faLinkedin = free_brands_svg_icons_1.faLinkedin;
        this.faGithub = free_brands_svg_icons_1.faGithub;
    }
    SammyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.secondContainerReveal = false;
        this.thirdContainerReveal = false;
        this.myStyle = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '10%',
            left: 0,
            right: 0,
            bottom: 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 50,
                },
                color: {
                    value: '#ff0000',
                },
                shape: {
                    type: 'triangle',
                },
            },
        };
        // this.projects = this.ps.getProjects();
        this.urlSubscription = this.route.data.subscribe(function (data) {
            data['pics'][0].subscribe(function (url) {
                _this.profileURL = url;
            });
            _this.projects = data['projects'];
        });
        this.messageSubscription = this.message.getMessage().subscribe(function (data) {
            _this.picInPositions(data.top);
            if (!data.top) {
                _this.revealSecond(data.top);
            }
        });
        this.resume.getResume().subscribe(function (res) {
            _this.resumeURL = res;
        });
        console.log(this.resumeURL);
    };
    SammyComponent.prototype.ngOnDestroy = function () {
        this.urlSubscription.unsubscribe();
        this.messageSubscription.unsubscribe();
    };
    SammyComponent.prototype.picInPositions = function (inPos) {
        this.picExpand = inPos;
    };
    SammyComponent.prototype.revealSecond = function (inPos) {
        this.secondContainerReveal = true;
    };
    SammyComponent = __decorate([
        core_1.Component({
            selector: 'app-sammy',
            templateUrl: './secondary.html',
            styleUrls: ['./sammy.component.css'],
            animations: sammy_animations_1.animationsList.slice(),
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            message_service_1.MessageService,
            resumePicResolver_service_1.ResumeResolver])
    ], SammyComponent);
    return SammyComponent;
}());
exports.SammyComponent = SammyComponent;
//# sourceMappingURL=sammy.component.js.map