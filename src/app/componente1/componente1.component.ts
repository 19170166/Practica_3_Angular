import { Component, OnInit } from '@angular/core';
import {Clase1} from '../Clases/clase1';
import {Metodos} from '../Clases/metodos';
import {Lista} from '../Clases/lista';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  met= new Metodos();
  lista = Lista;
  selectProd: Clase1;
  visible:boolean;
  btndet:boolean;
  onSelect(pro:Clase1):void{
    this.selectProd = pro;
    this.visible=true;
    this.btndet=true;
  }

  ocultar(){
    this.visible=false;
    this.btndet=false;
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
