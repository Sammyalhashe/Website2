import {
    trigger,
    keyframes,
    transition,
    query,
    animate,
    style,
    group,
    stagger,
} from '@angular/animations';

const animationList = [
    trigger('listAnimation', [
        transition('* => *', [
            query(
                ':enter',
                style({
                    opacity: 0,
                    transform: 'translateY(500px)',
                }),
                {
                    optional: true,
                }
            ),
            query(
                ':enter',
                stagger('500ms', [
                    group([
                        animate(
                            '0.5s ease-in',
                            keyframes([
                                style({
                                    opacity: .7,
                                    transform: 'translateY(-200px)',
                                }),
                                style({
                                    opacity: 1,
                                    transform: 'translateY(0px)',
                                }),
                            ])
                        ),
                        animate(
                            '0.5s ease-in-out',
                            keyframes([
                                style({ transform: 'scale(0.7)' }),
                                style({ transform: 'scale(1.1)' }),
                                style({ transform: 'scale(1.0)' }),
                            ])
                        ),
                    ]),
                ]),
                {
                    optional: true,
                }
            ),
        ]),
    ]),
];

export { animationList };
