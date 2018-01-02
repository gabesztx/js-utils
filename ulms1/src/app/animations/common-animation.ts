import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
export const fadeInKeyFrameAnimation =
    trigger('fadeInKeyFrame', [
        state('in', style({ opacity: 0 })),
        transition(':enter', [
            animate('.5s ease-out', keyframes([
                style({ opacity: 0 }),
                style({ opacity: 1 }),
            ]))
        ])
    ]);
export const fadeImageKeyFrameAnimation =
    trigger('fadeImageKeyFrame', [
        state('in', style({ opacity: 1 })),
        transition(':enter', [
            animate('.8s ease-out', keyframes([
                style({ opacity: 0 }),
                style({ opacity: 1 }),
            ]))
        ])
    ]);

