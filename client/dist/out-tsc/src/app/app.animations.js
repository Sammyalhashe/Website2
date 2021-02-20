"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var animationList = [
    animations_1.trigger('routeAnimation', [
        animations_1.transition(':enter', []),
        animations_1.transition('home <=> resume', [
            animations_1.group([
                animations_1.query(':enter, :leave', animations_1.style({ position: 'fixed', width: '100%' }), { optional: true }),
                animations_1.group([
                    animations_1.query(':enter', [
                        animations_1.animate('1s ease-in-out', animations_1.keyframes([
                            animations_1.style({
                                opacity: 0.2,
                                transform: 'translateX(100%)',
                            }),
                            animations_1.style({
                                opacity: 1,
                                transform: 'translateX(0%)',
                            }),
                        ])),
                    ], { optional: true }),
                    animations_1.query(':leave', [
                        animations_1.animate('1s ease-in-out', animations_1.keyframes([
                            animations_1.style({
                                opacity: 1,
                                transform: 'translateX(0%)',
                            }),
                            animations_1.style({
                                opacity: 0,
                                transform: 'translateX(-100%)',
                            }),
                        ])),
                    ], { optional: true }),
                ]),
            ]),
        ]),
    ]),
];
exports.animationList = animationList;
//# sourceMappingURL=app.animations.js.map