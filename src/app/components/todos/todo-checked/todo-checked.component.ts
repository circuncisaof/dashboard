import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-checked',
  templateUrl: './todo-checked.component.html',
  styleUrls: ['./todo-checked.component.css']
})
export class TodoCheckedComponent {
  @Input() todos:string ='aaaa';

}
