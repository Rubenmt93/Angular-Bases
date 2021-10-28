import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
 
})
export class PersonajesComponent  {
  get personajes():Personaje[]{
    return this.dbzService.personajes
  }
  constructor( private dbzService: DbzService){
    
  }
}
