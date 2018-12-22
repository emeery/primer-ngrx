import * as LibroAcciones from './libro.actions';
import { Libro } from './libro.model';

export type Action = LibroAcciones.All;
// default app state
const defaultState: Libro = {
    texto: 'Default Libro',
    likes: 0
};
// Helper para crear nuevo objeto del estado
const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};
export function libroReducer(
    state: Libro = defaultState, action: Action) {
    console.log(action.type);
    switch (action.type) {
        case LibroAcciones.EDITA_TEXTO:
            return newState(state, {texto: action.payload});
        case LibroAcciones.MAS_UN_VOTO:
            return newState(state, {likes: state.likes + 1});
        case LibroAcciones.MENOS_UN_VOTO:
            return newState(state, {likes: state.likes - 1});
        case LibroAcciones.RESET:
            return defaultState;
        default:
            return state;
    }
}
