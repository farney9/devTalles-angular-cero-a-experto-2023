import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [],
  templateUrl: './user-list-page.component.html',
  styles: ``
})
export default class UserListPageComponent {

  userList = inject(UsersService);

}
