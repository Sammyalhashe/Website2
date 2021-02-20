"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var animationList = [
    animations_1.trigger('listAnimation', [
        animations_1.transition('* => *', [
            animations_1.query(':enter', animations_1.style({
                opacity: 0,
                transform: 'translateY(500px)',
            }), {
                optional: true,
            }),
            animations_1.query(':enter', animations_1.stagger('500ms', [
                animations_1.group([
                    animations_1.animate('0.5s ease-in', animations_1.keyframes([
                        animations_1.style({
                            opacity: .7,
                            transform: 'translateY(-200px)',
                        }),
                        animations_1.style({
                            opacity: 1,
                            transform: 'translateY(0px)',
                        }),
                    ])),
                    animations_1.animate('0.5s ease-in-out', animations_1.keyframes([
                        animations_1.style({ transform: 'scale(0.7)' }),
                        animations_1.style({ transform: 'scale(1.1)' }),
                        animations_1.style({ transform: 'scale(1.0)' }),
                    ])),
                ]),
            ]), {
                optional: true,
            }),
        ]),
    ]),
];
exports.animationList = animationList;
//# sourceMappingURL=project.animations.js.map