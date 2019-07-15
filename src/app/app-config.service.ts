import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import example from '../assets/config.json';



@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    try {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.appConfig = example;
          console.log('Async Work Complete');
          resolve();
        }, 1000);
      });

    } catch (e) {
      console.log('here ========================');
      console.log(e, e.stack);
      console.error(e, e.stack);
    }
  }

  // This is an example property ... you can make it however you want.
  get apiBaseUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.apiBaseUrl;
  }
}
