import { Component } from '@angular/core';
import { ListTodosComponent } from '../../components/Todos/list-todos/list-todos.component';
import { TodoComponent } from '../../components/Todos/todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoComponent, ListTodosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
