import {
    trigger,
    keyframes,
    transition,
    query,
    animate,
    style,
    group,
    animateChild,
    stagger,
    state,
} from '@angular/animations';

const animationsList = [
    trigger('pictureAnimation', [
        state('false', style({ transform: 'scale(0.7)' })),
        state('true', style({ transform: 'scale(1)' })),
        transition('* <=> *', animate('0.7s ease-in')),
    ]),
    trigger('revealAnimation', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition('false => true', animate('1s ease-in')),
    ]),
];

export { animationsList };
