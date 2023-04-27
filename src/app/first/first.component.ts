import { Component } from '@angular/core';
import { Task } from '../Models/task';
import {TaskService} from '../Services/task.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private taskService: TaskService){}

  taskObj : Task = new Task();
  inputValue: string = '';
  tasksFromDB: Task[] = [];
  newTaskName: string = '';
  editTaskValue : string = '';
  id:number =1;

  ngOnInit(): void {
    this.editTaskValue = '';
    this.newTaskName = '';
    this.taskObj = new Task();
    this.tasksFromDB = [];
    this.getTask();
  }
  
  getTask(){
    this.taskService.getTask().subscribe(result=>
      {
        this.tasksFromDB = result;
      });
  }
  addTask(){
    let newTask = {taskName: this.newTaskName, id:this.id};
    this.taskService.addTask(newTask);
    this.id++;
  }

  removeTask(index: number) {
  this.tasksFromDB.splice(index, 1);
}
}
