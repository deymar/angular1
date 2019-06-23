import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

public dato="holi";
/****** 1 tipos de datos ************* */
public nombre:string="solo textio";
public edad:number=45;
public true:boolean=true;
public producto:Array<string>=
              ['pro1','pro2'
              ];
public producto2:Array<any>=
              ['pro1',45
              ];
/******************* */

/********  2 Constructor */
constructor()  /*primer metodo que se ejecuta */
{ 
console.log('mostrando '+this.nombre);
}
/***********************/

 /********3 funcion ngOnInit ********* */
 ngOnInit() 
 { 
   this.funcion1();
   this.funcion2();
 }

 funcion1()
 { console.log("DESDE LA FUNCION1");}
 /***************** */


/****4 variables let y var */
 funcion2()
 {
  var uno =8;
  var dos=15;
  if(uno ===8)
  { let uno:string="  desde el bloque";
    console.log("dentro del if"+uno);
  }
 }
/***********               */


/*****5  */

/******** */



}
