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
var app_animations_1 = require("./app.animations");
var router_1 = require("@angular/router");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var message_service_1 = require("./message.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, message) {
        var _this = this;
        this.router = router;
        this.message = message;
        this.faSpinner = free_solid_svg_icons_1.faSync;
        this.routeTitles = [
            { name: 'Resume', path: 'resume' },
        ];
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof router_1.NavigationStart) {
                _this.loading = true;
            }
            if (routerEvent instanceof router_1.NavigationEnd ||
                routerEvent instanceof router_1.NavigationCancel ||
                routerEvent instanceof router_1.NavigationError) {
                _this.loading = false;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.sendMessage = function ($event) {
        this.message.sendMessage($event);
    };
    AppComponent.prototype.prepRouteState = function (outlet) {
        return outlet.activatedRouteData['animation'] || 'home';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            animations: app_animations_1.animationList.slice(),
        }),
        __metadata("design:paramtypes", [router_1.Router, message_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map