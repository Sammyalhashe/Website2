"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular imports
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application imports: components/modules/services
var app_component_1 = require("./app.component");
var main_page_module_1 = require("./main-page/main-page.module");
var resume_module_1 = require("./resume/resume.module");
var shared_module_1 = require("./shared/shared.module");
var message_service_1 = require("./message.service");
// Application imports: other
var app_routes_1 = require("./app.routes");
var environment_1 = require("../environments/environment");
// external imports
var fire_1 = require("@angular/fire");
var storage_1 = require("@angular/fire/storage");
var firestore_1 = require("@angular/fire/firestore");
var material_module_1 = require("./material/material.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                animations_1.BrowserAnimationsModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                storage_1.AngularFireStorageModule,
                firestore_1.AngularFirestoreModule,
                material_module_1.MaterialModule,
                main_page_module_1.MainPageModule,
                resume_module_1.ResumeModule,
                shared_module_1.SharedModule,
            ],
            providers: [message_service_1.MessageService],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map