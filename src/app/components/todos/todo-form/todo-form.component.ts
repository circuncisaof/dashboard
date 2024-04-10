import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/interface/todo';
import { ApiService } from 'src/app/services/services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit{
  @Input() todo:string ='';
  @Input() id:string ='';
  createAt: boolean = false;
  updatAt: boolean = false

  iTodo = {} as ITodo;
  iTodos: ITodo[] =[];

  error: string=' '
  seeModa: boolean = false;
  obsReq: Observable<ITodo[]> | undefined;
  checked = false
  constructor(private http: ApiService){}

  ngOnInit() {
    this.getAll()
  }


  getAll():void{
    this.obsReq = this.http.getAll()
  }
 
}
