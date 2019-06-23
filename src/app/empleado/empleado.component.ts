import { Component, OnInit } from '@angular/core';
import {Empleado} from './empleado_model'; //recibiendo

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

public empleado:string;
public empleado2:Empleado;  //recibiendo  
public empleados3:Array<Empleado>;  //array con la clase empleado
public condicion:boolean;
public color:string;



  constructor()
 { 
  this.empleado="soy un empleado";
  this.empleado2=new Empleado('deymar',18); //recibiendo

  this.empleados3=[                  //array con la clase empleado
                  new Empleado('deymar',18),
                  new Empleado('deymar2',19),
                  new Empleado('deymar3',20)
                 ];
  this.condicion=true;
  this.color="brown";
 }

  ngOnInit()
   {
    
    //console.log (this.empleado2);
    console.log(this.empleados3[1].edad);

   }

        cambiarCondicion (valor)
        {
          this.condicion=valor;

        }
        aumentar ()
        {
          this.empleados3[1].edad=   (this.empleados3[1].edad)+1;
          console.log(this.empleados3[1].edad);
        }
        disminuir ()
        {
         this.empleados3[1].edad=   (this.empleados3[1].edad)-1;
         console.log(this.empleados3[1].edad);
        }

        cambiarColor(valor2)
        {
         this.color=valor2;
          console.log(this.color);
        }


}
