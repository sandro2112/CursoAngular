import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() value = new EventEmitter<any>();  
  restaurante : string ='';
  ciudad : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregar(restaurante:string, ciudad:string){
    if(restaurante!= '' && ciudad!=''){
      console.log(restaurante,ciudad)
      this.value.emit({restaurante:this.restaurante, ciudad:this.ciudad});
      this.restaurante='';
      this.ciudad='';
    }else{
      //console.log('123');
      alert('Debe completar el nombre del restaurante y la ciudad')
    }
    
  }
/*
  agregar(restaurante:string){
    if(restaurante!= '' ){
      console.log(restaurante)
      this.value.emit(this.restaurante);
      this.restaurante='';
      this.ciudad='';
    }else{
      //console.log('123');
      alert('Debe completar el nombre del restaurante y la ciudad')
    }
    
  }*/

}
