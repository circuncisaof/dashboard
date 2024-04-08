import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit{
  @Input() todos:string ='aaaa';
  checked = "checkbox"
  constructor(){

  }
  ngOnInit() {

  }




  update(){
    console.log(this.todos)
  }
}
