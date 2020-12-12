import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-restaurantes';
  items_restaurante: string[] = [];
  items_ciudad: string[] = [];

  agregar({restaurante, ciudad}) {
    if(this.items_restaurante.find(x => x == restaurante)){
      alert('No debe ingresar un nombre de restaurante que ya exista')
    }else{
      //Volver a su orden
      this.items_restaurante.reverse();
      this.items_ciudad.reverse();
      //Agregar restaurantes y ciudades a los arrays
      this.items_restaurante.push(restaurante);
      this.items_ciudad.push(ciudad);
      //Ordenar Descendetemente
      this.items_restaurante.reverse();
      this.items_ciudad.reverse();
    }

    
  }

}
