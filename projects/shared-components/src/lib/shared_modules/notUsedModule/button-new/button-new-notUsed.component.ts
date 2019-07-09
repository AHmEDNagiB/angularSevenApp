import { Component, ViewEncapsulation, Input } from '@angular/core'

@Component({
  selector: 'button-new-notUsed',
  templateUrl: './button-new.component.html',
  styleUrls: ['./button-new.component.css'],
  encapsulation: ViewEncapsulation.None,

})

export class ButtonNewNotUsedComponent {

  @Input() title: string;

  constructor() {
    console.log('NotUsed ButtonNewComponent is useeeeeeeeeeeeeeeeeed');
    console.log('!!!@@@###$$$%%%^^^');
  }
}
