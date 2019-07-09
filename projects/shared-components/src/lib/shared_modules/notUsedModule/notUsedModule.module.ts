import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNewNotUsedComponent } from './button-new/button-new-notUsed.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ButtonNewNotUsedComponent],
  exports: [ButtonNewNotUsedComponent]
})
export class NotUsedModuleModule {
}
