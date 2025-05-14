import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, TUsers } from './assets/UsersMockData';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firsrt-angular-app';
  users: TUsers[] = DUMMY_USERS;
  selectedUser: TUsers | undefined = undefined;
  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
