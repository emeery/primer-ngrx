import {Action} from '@ngrx/store';

export const EDITA_TEXTO = 'EDITA_TEXTO';
export const MAS_UN_VOTO = 'MAS_UN_VOTO';
export const MENOS_UN_VOTO = 'MENOS_UN_VOTO';
export const RESET = 'RESET';
export class EditLibro implements Action {
  readonly type = EDITA_TEXTO;
  constructor(public payload: string) {}
}
export class MasVoto implements Action {
    readonly type = MAS_UN_VOTO;
}
export class MenosVoto implements Action {
    readonly type = MENOS_UN_VOTO;
}
export class Reset implements Action {
    readonly type = RESET;
}
export type All = EditLibro| MasVoto | MenosVoto | Reset;
