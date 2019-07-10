import { Component, OnInit } from '@angular/core';
import { Formulario} from './formulario';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
public dato:string="datos desde el formulario";

public formulario:Formulario;

public formulario2:Array<Formulario>







constructor()
  {

    this.formulario = new Formulario('',
                                    '',
                                    '');
    this.formulario2 = [
      new Formulario('pepe','uno', 'rojo'),
      new Formulario('nuevo','ultimo', 'yellow')

    ];



  }

  ngOnInit()
  {}

  onSubmit()
  {
    console.log(this.formulario);
    this.formulario2.push(this.formulario);
    this.formulario = new Formulario('',
      '',
      '');
  }

} // fin de la clase
