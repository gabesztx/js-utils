import { trigger, state, animate, transition, keyframes, stagger, query, style } from '@angular/animations';

export const slideInOutAnimation =
    trigger('slideInOut', [
        state('in', style({ transform: 'translateY(0)', opacity: '1' })),
        transition(':enter', [
            style({
                    transform: 'translateY(10px)',
                    opacity: '0'
                }
            ),
            animate('0.3s ease-out')
        ]),
        transition(':leave', [
            animate('0.3s ease-in', style({
                    transform: 'translateY(10px)',
                    opacity: '0'
                }
            ))
        ])
    ]);

export const slideInOutKeyFrameAnimation =
    trigger('slideInOutKeyFrame', [
        state('in', style({ transform: 'translateY(0) scale(1)', opacity: 1 })),
        transition(':enter', [
            animate('0.7s cubic-bezier(0, 0.32, 0.07, 1.03)', keyframes([
                style({ transform: 'translateY(80px)', opacity: 0 }),
                style({ transform: 'translateY(0)', opacity: 1 })
            ]))
        ]),
        transition(':leave', [
            animate('.1s ease-in', keyframes([
                style({ transform: 'translateY(0)', opacity: 1 }),
                style({ transform: 'translateY(5px)', opacity: 0 })
            ]))
        ])
    ]);

export const slideOutInKeyFrameAnimation =
    trigger('slideOutInKeyFrame', [
        state('in', style({ transform: 'translateY(0) scale(1)', opacity: 1 })),
        transition(':enter', [
            // animate('0.8s cubic-bezier(0, 0.32, 0.07, 1.03)', keyframes([
            animate('0.4s ease-in', keyframes([
                // animate('0.4s ease-in', keyframes([
                style({ transform: 'translateY(-18px)', opacity: 0 }),
                style({ transform: 'translateY(0)', opacity: 1 })
            ]))
        ]),
        transition(':leave', [
            animate('0.1s ease-in', keyframes([
                style({ transform: 'translateY(0)', opacity: 1 }),
                style({ transform: 'translateY(-5px)', opacity: 0 })
            ]))
        ])
    ]);




/*trigger('myAwesomeAnimation', [
    state('small', style({
        transform: 'scale(1)',
    })),
    state('large', style({
        transform: 'scale(1.2)',
    })),
    transition('small => large', animate('1000ms ease-in')),
    transition('large => small', animate('1000ms ease-out'))*/


