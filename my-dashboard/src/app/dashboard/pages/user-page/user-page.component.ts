import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from "@angular/core/rxjs-interop";
import { map, switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="fullName()" withShadow />

    @if( user()) {

      <section>
        <img class="rounded"  [srcset]="user()!.avatar"  [alt]="user()!.first_name">
        <div>
          <h4 class="my-2 text-2xl font-semibold">{{ user()!.first_name }} {{ user()!.last_name }}</h4>
          <p>{{ user()!.email}}</p>
        </div>
      </section>

    } @else {
      <div class="flex items-center justify-center h-64">
        <h3 class="text-2xl text-gray-800">Loading user details ...</h3>
      </div>
    }
  `,

})
export default class UserPageComponent {

  usersService = inject(UsersService);
  private route = inject(ActivatedRoute);
  // public user = signal<User|undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id)),
    )
  )
  fullName = computed(() => {
    if(this.user()) {
      return `${this.user()!.first_name} ${this.user()!.last_name}`;
    }
    return 'User Details';
  });
}
