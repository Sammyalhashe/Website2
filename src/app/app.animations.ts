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
  state
} from '@angular/animations';

const animationList = [
    trigger('routeAnimation', [
        transition(':enter', []),
        transition('home <=> resume', [
            group([
                query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {optional: true}),
                group([
                    query(
                        ':enter',
                        [
                            animate(
                                '1s ease-in-out',
                                keyframes([
                                    style({ opacity: 0.2, transform: 'translateX(100%)'}),
                                    style({ opacity: 1, transform: 'translateX(0%)' })
                                ])
                            )
                        ],
                        {optional: true}
                    ),
                    query(
                        ':leave',
                        [
                            animate(
                                '1s ease-in-out',
                                keyframes([
                                    style({ opacity: 1, transform: 'translateX(0%)'}),
                                    style({ opacity: 0, transform: 'translateX(-100%)'})
                                ])
                            )
                        ],
                        {optional: true}
                    )
                ])
            ])
        ])
    ])
];

export default animationList;
