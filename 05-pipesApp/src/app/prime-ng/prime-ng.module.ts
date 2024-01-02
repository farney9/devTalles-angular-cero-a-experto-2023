// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [],
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    RippleModule,
    TableModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
