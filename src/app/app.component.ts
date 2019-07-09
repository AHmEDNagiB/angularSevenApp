import { Component, OnInit } from '@angular/core';
declare var IN_DEBUG: boolean;
declare var cdnURL: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularSevenApp';
  ngOnInit(): void {
    console.log('IN_DEBUG::' + IN_DEBUG[0]);
    console.log('cdnURL::' + cdnURL[0]);
    for (let index = 1; index < 11; index++) {
      console.log('index is ===> ', index);
    }
  }
}



