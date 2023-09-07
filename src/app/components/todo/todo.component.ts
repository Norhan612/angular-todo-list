import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //todos!: Todo[];
  todos: Todo[] = [];
  inputTodo: string ="";
  constructor() {}
  ngOnInit(): void {
   /* 
    this.todos = [
      {
       content:'first content',
       completed: false
      },
      {
        content:'second content',
        completed: false
       }
  ]
 */ 
  }

  toggleDone (id: number)
  {
    this.todos.map((v,i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id: number)
  {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo () {
    if(this.inputTodo){
      let todo=new Todo();
      todo.content=this.inputTodo;
      todo.completed=false;
      this.todos.push(todo);
      this.inputTodo='';


    }
    else{
      alert('Invalid Input');
    }
  }
  

/*
  addTodo ()
  {
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });

    this.inputTodo ="";
  }
*/


}
