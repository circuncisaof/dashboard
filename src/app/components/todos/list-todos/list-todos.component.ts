import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
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
  load:boolean = false;
  msg:string = ''
  error: string ='';
  checked:boolean = false;
  hasTodos: boolean = false;
  reloadData: Observable<number> = timer(100)
  constructor(private http:ApiService ){}

  ngOnInit(): void{
    this.getAll();
  }

  getAll(): void{
    this.msg = 'Nao existe Todo / error no servidor'
    try {
      this.http.getAll().subscribe({
        next: (data) => {
          this.todos = data;
        },
      })
    } catch (error:any) {
      this.msg = error;
    }
  }
}
