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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var firestore_1 = require("@angular/fire/firestore");
var ProjectResolverService = /** @class */ (function () {
    function ProjectResolverService(db) {
        this.db = db;
    }
    ProjectResolverService.prototype.getProjects = function () {
        return this.db.collection('Projects').valueChanges();
    };
    ProjectResolverService.prototype.resolve = function (_, __) {
        return this.db
            .collection('Projects')
            .valueChanges()
            .pipe(operators_1.take(1), operators_1.mergeMap(function (data) {
            if (data) {
                return rxjs_1.of(data);
            }
            else {
                return rxjs_1.of(null);
            }
        }));
    };
    ProjectResolverService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], ProjectResolverService);
    return ProjectResolverService;
}());
exports.ProjectResolverService = ProjectResolverService;
//# sourceMappingURL=projects.service.js.map