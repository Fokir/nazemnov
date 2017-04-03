import {trigger, state, style, transition, animate} from "@angular/animations";

export function slide_top(name: string){
    return trigger(name, [
        state('in', style({transform: 'translate(0, 0)'})),
        transition(':enter', [
            style({transform: 'translate(0, -100%)'}),
            animate(100)
        ]),
        transition(':leave', [
            animate(100, style({transform: 'translate(0, -100%)'}))
        ])
    ])
}
