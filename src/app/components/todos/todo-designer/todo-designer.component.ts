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
    todo: '',
  }
  seeModa: boolean = false;
  submitted :boolean= false;
  correct_msg = '';
  msg_error = '';

  @Output() reload = new EventEmitter();


  constructor(private http: ApiService) {}

  ngOnInit() {

  }



  save():void{
    const datas ={
      todo: this.data.todo
    }

    try {
      console.log(datas.todo)
      if(datas.todo == ""){
        this.submitted= false;
        this.msg_error = 'Nao pode ser vazio'
      }else{
        this.http.save(datas).subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
            this.correct_msg = 'Deu certo!'

          },

        })
      }

    } catch (error:any) {
      this.submitted= false;
      this.msg_error = error
      console.error(error)

    }

  }
}
