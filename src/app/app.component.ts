import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import {Libro} from './libro.model';
import * as LibroAccion from './libro.actions';
interface AppState {
  libro: Libro;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  libro: Observable<Libro>;
  texto: string;
  constructor(private tienda: Store<AppState>) {
    this.libro = this.tienda.select('libro');
  }
  editLibro() {
    this.tienda.dispatch(new LibroAccion.EditLibro(this.texto));
  }
  subirVoto() {
    this.tienda.dispatch(new LibroAccion.MasVoto());
  }
  bajarVoto() {
    this.tienda.dispatch(new LibroAccion.MenosVoto());
  }
  resetVoto() {
    this.tienda.dispatch(new LibroAccion.Reset());
  }

  // mensaje: Observable<string>;
  // constructor(private tienda: Store<AppState>) {
  //   this.mensaje = this.tienda.select('mensaje');
  // }
  // saludoEspanol() { this.tienda.dispatch({type: 'ESPAÑOL'}); }
  // saludoFrances() { this.tienda.dispatch({type: 'FRANCES'}); }
}
