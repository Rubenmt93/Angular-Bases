import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Batman']
  heroeBorrado: string= ''
  borrarHeroe(){
    console.log("Borrando....")
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}
