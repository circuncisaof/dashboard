import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoI } from 'src/app/interface/TodoI';
import { ApiService } from 'src/app/services/services';

@Component({
  selector: 'app-todo-designer',
  templateUrl: './todo-designer.component.html',
  styleUrls: ['./todo-designer.component.css']
})



export class TodoDesignerComponent implements OnInit {
  todo_title = 'Todo';
  data: TodoI ={
    todo: ''
  }
  seeModa: boolean = false;
  submitted = false;

  @Output() reload = new EventEmitter();


  constructor(private http: ApiService) {}

  ngOnInit() {

  }



  save():void{
    const datas ={
      todo: this.data.todo
    }
    this.http.save(datas).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    })

    console.log("salvei");

    this.reload.emit();
  }
}
