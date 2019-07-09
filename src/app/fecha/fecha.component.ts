import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {

  public valor:string="Desde la fecha";
  public fecha;

  constructor()
  {

    this.fecha = new Date(2017,2,5);
  }

  ngOnInit()
  {}

}
