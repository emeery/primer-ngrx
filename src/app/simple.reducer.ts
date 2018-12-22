import {Action} from '@ngrx/store';

export function simpleReducer(
    state: string = 'Hola Mundo', action: Action) {
        // console.log(action.type, state);
        switch (action.type) {
            case 'ESPAÑOL':
            return state = 'Hola Mundo';
            case 'FRANCES':
            return state = 'Bonjour le monde';
            default: return state;
        }
}
