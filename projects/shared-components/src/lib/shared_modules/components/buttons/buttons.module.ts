import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonNewComponent } from './button-new/button-new.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ButtonComponent, ButtonNewComponent],
  exports: [ButtonComponent, ButtonNewComponent]
})
export class ButtonsModule {
}
