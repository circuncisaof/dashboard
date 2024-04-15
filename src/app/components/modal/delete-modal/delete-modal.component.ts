import { Component, Input } from '@angular/core';
import { ITodo } from 'src/app/interface/todo';
import { ApiService } from 'src/app/services/services';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
 @Input() todos:ITodo = {
  id: '',
  todo: '',
}
submitted:boolean = false;
mesg_correct:string = '';
  seeModa: boolean = false;
  toggle() {
    this.seeModa = !this.seeModa
  }

  constructor(private http:ApiService){}

  getId(id:string){
    this.submitted = true;
    this.mesg_correct = 'Deleted'
    this.http.get(id).subscribe({
      next:(data) => {
        this.todos.id = data.id;
        this.todos.todo = data.todo;
      },
      error: (e) => this.mesg_correct = e
    })
  }

  deleteId(id:string) {
    this.submitted = true;
    this.http.delete(id).subscribe({
      next:(res) =>{
        console.log(res)
      }
    })
  }

  deletetoggleid(id:string) {
    this.seeModa = !this.seeModa
    this.todos.id = id
    this.getId(id)
  }

}
