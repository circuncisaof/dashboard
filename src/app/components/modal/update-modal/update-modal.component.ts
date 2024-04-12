import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/interface/todo';
import { ApiService } from 'src/app/services/services';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent {
  @Input() todos:ITodo = {
    id: '',
    todo: '',
    checked: false
  };
  submitted:boolean = false;
  mesg_correct:any = '';
  blockBttn: boolean = true;
  seeModa: boolean = false;
  toggle() {
    this.seeModa = !this.seeModa
  }

  constructor(private http:ApiService){}

  updateToggleId(id:string) {
    this.seeModa = !this.seeModa
    this.todos.id = id
    this.getId(id)
  }

  getId(id:string){
    this.http.get(id).subscribe({
      next:(data) => {
        this.todos.id = data.id;
          this.todos.todo = data.todo;
        },
        error: (e:string) => this.mesg_correct(e)
      })
    }
    
    verifyIfNull() {
    if(this.todos.todo != null || this.todos.todo != ""){
      this.blockBttn = false;
    }
  }

  updateId(id:string):void{
    const data:ITodo = {
      id:this.todos.id,
      todo:this.todos.todo,
      checked: this.todos.checked
    }

    this.submitted = true;
    this.mesg_correct = 'Deu certo';
    this.http.update( id, data).subscribe({
      next:(res) =>{
        data.checked= this.todos.checked
        data.todo=this.todos.todo
        return res;
      }
    })
  }
}
