import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {

  public valor:string="Desde la fecha";
  public fecha;

  constructor( private taskService: TaskService )
  {
    this.fecha = new Date(2017,2,5);


  }

  ngOnInit()
  {}


  getAllTasks()
  {
    this.taskService.getAllTasks()
      .subscribe(datos_importados =>
      {
        console.log(datos_importados);
      });
  }

  getTask() {
    this.taskService.getTask('1')
      .subscribe(todo => {
        console.log(todo);
      });
  }


  createTask() {
    const task = {
      id: '201',
      userId: '201',
      title: 'change title',
      completed: true
    };

    this.taskService.createTask(task)
      .subscribe((newTask) => {
        console.log(newTask);
      });
  }

  //funcion para actualizar
  updateTask() {
    const task = {
      id: '1',
      userId: '1',
      title: 'cambiadoooo',
      completed: true
    };
    this.taskService.updateTask(task)
      .subscribe(todo => {
        console.log(todo);
      });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
      .subscribe((data) => {
        console.log(data);
      });
  }


}
