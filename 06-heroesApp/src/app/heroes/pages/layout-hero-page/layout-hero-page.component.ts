import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-hero-page',
  templateUrl: './layout-hero-page.component.html',
  styles: ``
})
export class LayoutHeroPageComponent {

  sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Agregar', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get user(): UserModel | undefined {
    return this.authService.currentUser
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
