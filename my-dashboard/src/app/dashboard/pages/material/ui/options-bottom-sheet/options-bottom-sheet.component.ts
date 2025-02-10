import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatBottomSheetModule, MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {

  private _bottomSheetRef =
    inject<MatBottomSheetRef<OptionsBottomSheetComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent) {
    console.log('openLink', event);
    event.preventDefault();
  }

}
