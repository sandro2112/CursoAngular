import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Rest } from 'src/app/app.component';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() array_rest:Rest[]=[];
  @Output() value = new EventEmitter<any>();  
  restaurante : string ='';
  ciudad : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  agregar(restaurante:string, ciudad:string){
    if(restaurante!= '' && ciudad!=''){
      if(this.array_rest.find(x => x.a_restaurante == restaurante)){
        alert('Por favor ingrese un nombre de restaurante que no se encuentre en la lista')
      }else{
        this.value.emit({restaurante:this.restaurante, ciudad:this.ciudad});
        this.restaurante='';
        this.ciudad='';
      }
      
    }else{
      alert('Debe completar el nombre del restaurante y la ciudad')
    }
    
  }

}
