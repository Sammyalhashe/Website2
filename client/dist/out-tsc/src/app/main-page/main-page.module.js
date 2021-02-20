"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sammy_component_1 = require("../sammy/sammy.component");
var fbResolverHome_service_1 = require("../sammy/fbResolverHome.service");
var shared_module_1 = require("../shared/shared.module");
var project_component_1 = require("../project/project.component");
var projects_service_1 = require("../project/projects.service");
var angular_particle_1 = require("angular-particle");
var resume_module_1 = require("../resume/resume.module");
var resumePicResolver_service_1 = require("../resume/resumePicResolver.service");
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, angular_particle_1.ParticlesModule, resume_module_1.ResumeModule],
            declarations: [sammy_component_1.SammyComponent, project_component_1.ProjectComponent],
            providers: [fbResolverHome_service_1.FirebaseResolverHome, projects_service_1.ProjectResolverService, resumePicResolver_service_1.ResumeResolver],
        })
    ], MainPageModule);
    return MainPageModule;
}());
exports.MainPageModule = MainPageModule;
//# sourceMappingURL=main-page.module.js.map