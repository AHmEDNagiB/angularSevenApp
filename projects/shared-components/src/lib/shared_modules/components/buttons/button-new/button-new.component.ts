import { Component, ViewEncapsulation, Input } from '@angular/core'

@Component({
  selector: 'button-new',
  templateUrl: './button-new.component.html',
  styleUrls: ['./button-new.component.css'],
  encapsulation: ViewEncapsulation.None,

})

export class ButtonNewComponent {

  @Input() title: string;

  constructor() {
    console.log('ButtonNewComponent is useeeeeeeeeeeeeeeeeed');
    console.log('!!!@@@###$$$%%%^^^');
  }
}
