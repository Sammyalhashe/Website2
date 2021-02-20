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
var resume_component_1 = require("./resume.component");
var resumePicResolver_service_1 = require("./resumePicResolver.service");
var shared_module_1 = require("../shared/shared.module");
var ResumeModule = /** @class */ (function () {
    function ResumeModule() {
    }
    ResumeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule
            ],
            exports: [resume_component_1.ResumeComponent],
            declarations: [resume_component_1.ResumeComponent],
            providers: [
                resumePicResolver_service_1.ResumePicResolver,
                resumePicResolver_service_1.ResumeResolver
            ]
        })
    ], ResumeModule);
    return ResumeModule;
}());
exports.ResumeModule = ResumeModule;
//# sourceMappingURL=resume.module.js.map