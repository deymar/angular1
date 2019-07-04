import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public titulo = " TAG de contacto";
  public parametro;


  constructor(private _route :ActivatedRoute,
              private _router:Router)
  { 


  }

  ngOnInit()
  {

    this._route.params.forEach( (params: Params)=>
    {
      this.parametro=params['page'];
    //  console.log(params);
    }
                              );

  }//Fin de la  ngOnInit
        redirigir(holi:any)
        {
          this._router.navigate(['/contacto',holi]);

        }


}  //Fin de la clase

