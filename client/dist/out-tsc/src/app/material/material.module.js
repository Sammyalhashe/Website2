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
// material components imports
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                card_1.MatCardModule,
                progress_spinner_1.MatProgressSpinnerModule,
                grid_list_1.MatGridListModule
            ],
            exports: [
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule
            ],
            declarations: [],
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map