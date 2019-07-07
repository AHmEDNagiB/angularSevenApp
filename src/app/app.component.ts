import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularSevenApp';
  ngOnInit(): void {
    for (let index = 1; index < 11; index++) {
      console.log('index is ===> ', index);
    }
  }
}



