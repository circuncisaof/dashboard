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
  }
    seeModa: boolean = false;
    toggle() {
      this.seeModa = !this.seeModa
    }

    constructor(private http:ApiService){}

    getId(id:string){
      this.http.get(id).subscribe({
        next:(data) => {
          this.todos.id = data.id;
          this.todos.todo = data.todo;
        },
        error: (e) => console.error(e)
      })
    }

    updateId(id:string):void{
      const data:ITodo = {
          id:this.todos.id,
          todo:this.todos.todo,
          checked: this.todos.checked
      }
      console.log("aaa quero gozar",data)
    this.http.update( id, data).subscribe({
        next:(res) =>{
          console.log(data)
          data.checked= this.todos.checked
          data.todo=this.todos.todo
          console.log("hhhh equero gozat",this.todos.checked, this.todos.todo, res)
        }
      })
    }

    updateToggleId(id:string) {
      this.seeModa = !this.seeModa
      this.todos.id = id
      this.getId(id)
    }


}
