import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-grat',
  templateUrl: './message-grat.component.html',
  styleUrls: ['./message-grat.component.css']
})
export class MessageGratComponent {
  @Input() right:string = ''
}
