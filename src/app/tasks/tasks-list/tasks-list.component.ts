import { Component, computed, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
 private selectedFilter = signal<string>('all');
  tasks = computed(()=>{
switch(this.selectedFilter()){

case 'open':
return this.taskService.allTask().filter((task)=> task.status==='OPEN');

case 'in-progress':
  return this.taskService.allTask().filter((task)=>task.status==='IN_PROGRESS')

case 'done':
return this.taskService.allTask().filter((task)=>task.status==='DONE')

default:
  return this.taskService.allTask();

}
    
  });
  constructor(private taskService:TaskService){

  }

  onChangeTasksFilter(filter: string) {


    this.selectedFilter.set(filter);
  }
}
