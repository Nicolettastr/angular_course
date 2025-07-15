import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './assets/UsersMockData';
import { HeaderComponent } from './header/header.components';
import { UserComponent } from './user/user.component';
import { TUsers } from './user/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, RouterOutlet],
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
