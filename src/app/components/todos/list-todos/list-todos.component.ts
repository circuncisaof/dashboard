import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interface/todo';
import { ApiService } from 'src/app/services/services';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todo = {} as ITodo;
  todos: ITodo[] = [];
  error: string =''

    hasTodos: boolean = false;
  constructor(private http:ApiService ){}

  ngOnInit(): void{
    this.getAll();

  }



  getAll(): void{
    this.http.getAll().subscribe({
      next: (data) => {
        this.todos = data;
        console.log(data)
      },
      error: (e) => this.error= e
    })

  }

}
