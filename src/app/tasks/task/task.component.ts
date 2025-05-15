import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ITask } from '../task.module';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
