import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent {
  title:string = 'Deseja Excluir esse Todo?';

}
