import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { ButtonModel } from './button-model';

@Component({
  selector: 'button-component',
  templateUrl: '../button/button.component.html',
  styleUrls: ['./button-en.css'],
  encapsulation: ViewEncapsulation.None,

})
/*
types of Buttons:
    1-Flat
    2-Disabled
    3-WarningRed
    4-Warning
    5-Contained
*/
export class ButtonComponent implements OnChanges {
  public buttonCSS: string;
  @Input()
  public data: ButtonModel;

  @Input()
  public title: string;

  ngOnChanges() {
    console.log('ngOnChanges');
  }

}
