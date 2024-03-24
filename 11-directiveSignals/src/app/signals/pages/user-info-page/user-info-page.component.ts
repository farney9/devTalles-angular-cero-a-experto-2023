import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.response..interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.sass'
})
export class UserInfoPageComponent implements OnInit {

  private usersService = inject(UsersService);
  userId = signal(1);
  currentUser = signal<User | undefined>(undefined);
  wasUserFound = signal(true);
  fullName = computed<string>(() => {
    if (!this.currentUser()) return 'User not found';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  })

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if ( id <= 0) return;
    this.userId.set(id);
    this.usersService.getUserById(id)
      .subscribe({
        next: user => {
          this.currentUser.set(user);
          this.wasUserFound.set(true);
        },
        error: () => {
          this.currentUser.set(undefined);
          this.wasUserFound.set(false);
        }
      });
  }
}
