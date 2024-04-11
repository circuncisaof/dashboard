import { Component, Input, OnInit } from '@angular/core';
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
  @Input() checked:any = false ;
  createAt: boolean = false;
  updatAt: boolean = false

  iTodo = {} as ITodo;
  iTodos: ITodo[] =[];

  error: string=' '
  seeModa: boolean = false;

  constructor(private http: ApiService){}

  ngOnInit() {
    this.getAll()
  }


  getAll():void{
    this.http.getAll()
  }

  getId(id:string){
    this.http.get(id).subscribe({
      next:(data) => {
        this.todo = data.id;
        this.id = data.todo;
      },
      error: (e) => console.error(e)
    })
  }

  updateId(id:string):void{
    const data:ITodo = {
        id:this.id,
        todo:this.todo,
        checked: this.checked
    }
    console.log("aaa quero gozar",data)
  this.http.update( id, data).subscribe({
      next:(res) =>{
        console.log(data.checked, data.id)
         this.checked = data.checked;
        this.todo = data.todo;
        console.log("hhhh equero gozat",this.checked, this.todo, res)
      }
    })
  }
}
