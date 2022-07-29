import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  @Input() todo!:Todo;

  constructor() { }

  @Output() getCompleted = new EventEmitter<Todo>();

  ngOnInit(): void {
  }

  completeTodo(object: Todo): void {
    this.getCompleted.emit(object);

  }

  fetchCompletedTodos(id:number, completed:boolean) {
    fetch('http://localhost:3000/todos/' + id, {
      method: "PATCH",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({completed: !completed})
    }).then(()=> {
      this.todo.completed = !completed;
      this.completeTodo(this.todo)
    })
  }
  deleteTodos(id:number){
    fetch('http://localhost:3000/todos/' + id, {
      method: "DELETE",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
    }).then(()=> {
      this.completeTodo(this.todo)
    })
  }
}
function Inport() {
  throw new Error('Function not implemented.');
}

