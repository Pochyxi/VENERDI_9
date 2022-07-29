import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosFetchService {

  todoArray:Todo [] = [];

  constructor() {
    fetch('../assets/db.json').then(response => response.json()).then(res => {
      this.todoArray = res.todos;
    })
   }

  getTodosFetch(){
    return fetch('../assets/db.json').then(response => response.json()).then(res => {
      this.todoArray = res.todos
    });
  }

  getTodosArray(){
    return this.todoArray;
  }

  getCompletedTodos() {
    return this.todoArray.filter(todo => todo.completed == false)
   }
   getTodos () {
     return this.todoArray.filter(todo => todo.completed == true)
   }
}
