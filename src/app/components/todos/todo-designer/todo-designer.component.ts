import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  msg_error = 'Nao pode ser nulo';
  blockBttn = true;

  formGroup!: FormGroup;
  constructor(private http: ApiService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      todo: new FormControl('',[Validators.required])
    })
  }

  get todo() {
    return this.formGroup.get('todo')!
  }

  save(){
    if(this.formGroup.invalid) return;
    if(!this.formGroup.controls['todo'].value.trim().length) return;

    console.log("my-group :",this.formGroup.controls['todo'].value.trim() )

    try {
      // const datas = String(this.formGroup.controls['todo'].value.trim());
      // console.log(datas)

      const payload: TodoI = {
        todo: String(this.formGroup.controls['todo'].value.trim()),
      }

      this.submitted = true;
      this.correct_msg ='savou lek';
      this.http.save(payload).subscribe({
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
