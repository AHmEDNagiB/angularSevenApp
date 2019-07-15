import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appConfigService: AppConfigService, private http: HttpClient) { }

  title = 'angularSevenApp';
  ngOnInit(): void {
    console.log('the config file ===> ', this.appConfigService.apiBaseUrl);
    console.log('the environment  ===> ', environment.apiBaseUrl);
    for (let index = 1; index < 11; index++) {
      console.log('index is ===> ', index);
    }
    // try {
    //   this.http.get('../assets/config.json').subscribe(res => {
    //     console.log('res ====>');
    //     console.log(res);
    //   });

    // } catch (e) {
    //   console.log(e, e.stack);
    //   console.error(e, e.stack);
    // }

  }
}



