import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);

  /*
  La función computed() toma una función como argumento y devuelve un valor calculado basado en los cambios en las dependencias de esa función.
  En este caso, la dependencia es this.authServicecurrentUser(), que es una función que devuelve el usuario actualmente autenticado.
  */

  user = computed(() => this.authService.currentUser());

  onLogout() {
    this.authService.logout();
  }

}
