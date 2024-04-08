import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './user-list-page.component.html',
  styles: ``
})
export default class UserListPageComponent {

  usersList = inject(UsersService);


}
