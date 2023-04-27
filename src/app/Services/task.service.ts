import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Task } from '../Models/task';
import {addDoc, deleteDoc, collection, collectionData, Firestore} 
                        from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private fs: Firestore) { }

  getTask():Observable<Task[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'ToDoListTable');
    return collectionData(myCollection);
  }

  addTask(task:Task){
    const myCollection = collection(this.fs, 'ToDoListTable')
    addDoc(myCollection, task);
  }

}
