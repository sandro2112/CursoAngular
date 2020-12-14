import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-restaurantes';
  array_rest: Rest[]=[];

  agregar({restaurante, ciudad}) {
    if(this.array_rest.find(x => x.a_restaurante == restaurante)){
      alert('No debe ingresar un nombre de restaurante que ya exista')
    }else{
      //Volver a su orden
      this.array_rest.reverse();
      //Agregar restaurantes y ciudades a los arrays
      this.array_rest.push({a_restaurante:restaurante,a_ciudad:ciudad});
      //Ordenar Descendetemente
      this.array_rest.reverse();
    }

    
  }

}

export class Rest{
  a_restaurante:string ='';
  a_ciudad:string = ''
  constructor(a_restaurante:string, a_ciudad:string){};
}
