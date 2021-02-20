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
// Angular Imports
var core_1 = require("@angular/core");
// Angularfire2 imports
var storage_1 = require("@angular/fire/storage");
var ResumePicResolver = /** @class */ (function () {
    function ResumePicResolver(storage) {
        this.storage = storage;
    }
    ResumePicResolver.prototype.resolve = function (route, state) {
        return this.storage
            .ref('Photos/SanFranBeach.jpg')
            .getDownloadURL();
    };
    ResumePicResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_1.AngularFireStorage])
    ], ResumePicResolver);
    return ResumePicResolver;
}());
exports.ResumePicResolver = ResumePicResolver;
var ResumeResolver = /** @class */ (function () {
    function ResumeResolver(storage) {
        this.storage = storage;
    }
    ResumeResolver.prototype.resolve = function (route, state) {
        return this.storage
            .ref('Downloadable/resume.pdf')
            .getDownloadURL();
    };
    ResumeResolver.prototype.getResume = function () {
        return this.storage
            .ref('Downloadable/resume.pdf')
            .getDownloadURL();
    };
    ResumeResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [storage_1.AngularFireStorage])
    ], ResumeResolver);
    return ResumeResolver;
}());
exports.ResumeResolver = ResumeResolver;
//# sourceMappingURL=resumePicResolver.service.js.map