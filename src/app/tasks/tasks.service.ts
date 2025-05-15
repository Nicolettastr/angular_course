import { Injectable } from '@angular/core';
import { INewTask } from './task.module';

// makes a class service injectable
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'This is the summary of task 1',
      dueDate: '2025-10-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Task 2',
      summary: 'This is the summary of task 2',
      dueDate: '2025-10-01',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task 3',
      summary: 'This is the summary of task 3',
      dueDate: '2025-10-01',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: INewTask, userId: string) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
