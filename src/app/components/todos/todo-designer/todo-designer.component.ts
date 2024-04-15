import { Component, OnInit } from '@angular/core';
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
  blockBttn = true;

  constructor(private http: ApiService) {}

  ngOnInit() {}

  snackBarCorrect(correct_msg:string){
    console.log(correct_msg)
    this.submitted = true;
    this.correct_msg = correct_msg
  }

  verifyIfNull() {
    if(this.data.todo === null && this.data.todo === ""){
      this.blockBttn = false;
    }
  }

  save():void{
    this.verifyIfNull()
    const datas ={
      todo: this.data.todo
    }

    try {
      this.submitted = true;
      this.correct_msg ='savou lek';
      this.http.save(datas).subscribe({
        next: (res) => {
          return res
        }
      })
    } catch (error:any) {
      this.submitted= false;
      this.msg_error = error
      console.error(error)
    }
  }
}
