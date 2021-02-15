import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Gokuh',
          poder: 15000
        },
        {
          nombre: 'Vegetta',
          poder: 85000
        },
        {
          nombre: 'Krillin',
          poder: 700
        }
      ]

      get personajes(): Personaje[] {
          return [...this._personajes]
      }

        constructor(){
        }

        agregarPersonaje( arg: Personaje ) {
            this._personajes.push(arg);
        }
}