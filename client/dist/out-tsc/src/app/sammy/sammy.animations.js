"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var animationsList = [
    animations_1.trigger('pictureAnimation', [
        animations_1.state('false', animations_1.style({ opacity: '0.0' })),
        animations_1.state('true', animations_1.style({ opacity: '1' })),
        animations_1.transition('* <=> *', animations_1.animate('0.7s ease-in')),
    ]),
    animations_1.trigger('revealAnimation', [
        animations_1.state('false', animations_1.style({ opacity: 0 })),
        animations_1.state('true', animations_1.style({ opacity: 1 })),
        animations_1.transition('false => true', animations_1.animate('1s ease-in')),
    ]),
];
exports.animationsList = animationsList;
//# sourceMappingURL=sammy.animations.js.map