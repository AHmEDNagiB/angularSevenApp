import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { SharedComponentsModule } from 'shared-components';
import { ButtonsModule } from 'shared-components';
import { AppConfigService } from './app-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    SharedComponentsModule,
    ButtonsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => {
      return () => {
        // Make sure to return a promise!
        console.log('here loadAppConfig() ');
        try {
          return appConfigService.loadAppConfig();
        } catch (e) {
          console.log('here ======================== 2');
          console.log(e, e.stack);
          console.error(e, e.stack);
        }
      };
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
