import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { SharedComponentsModule } from 'shared-components';
import { ButtonsModule } from 'shared-components';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    SharedComponentsModule,
    ButtonsModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
