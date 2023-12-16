import { NgModule } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    RippleModule,
  ]
})
export class PrimeNgModule { }
