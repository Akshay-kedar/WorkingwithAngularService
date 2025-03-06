import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './tasks/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
    //we should make it private and readable so that no one can chage the value of this from outside of the service
 private tasks = signal<Task[]>([]);

 allTask=this.tasks.asReadonly()

  addTask(task: TaskDatatype) {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTask) => [...oldTask, newTask]);
  }

updateTaskStatus(tasId:string,status:TaskStatus){
this.tasks.update((oldTasks)=>{
    return oldTasks.map((task)=>
    {
        return task.id===tasId?{...task, status:status}:task
    })
})


}




}

type TaskDatatype = {
  title: string;
  description: string;
};
