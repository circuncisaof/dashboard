import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() error:string = ''
  errors:boolean = false
  dataError(){
    this.errors = !this.errors
  }

}
