import {
    trigger,
    transition,
    animate,
    style,
    state,
} from '@angular/animations';

const animationsList = [
    trigger('pictureAnimation', [
        state('false', style({ opacity: '0.0' })),
        state('true', style({ opacity: '1' })),
        transition('* <=> *', animate('0.7s ease-in')),
    ]),
    trigger('revealAnimation', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition('false => true', animate('1s ease-in')),
    ]),
];

export { animationsList };
