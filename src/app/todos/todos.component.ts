import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosFetchService } from '../todos-fetch.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  arrayTodos:Todo [] = [];
  inputVal:string = '';
  modalControl = false;

  constructor( private todoService:TodosFetchService ) { }

  ngOnInit(): void {
      this.todoService.getTodosFetch().then(()=>{
      this.arrayTodos = this.todoService.getTodos()
      console.log(this.arrayTodos)
    });
  }
  deleteCompletedTodo(object:Todo):void {
    this.arrayTodos = this.arrayTodos.filter(todo=>todo.id != object.id);
  }

  addTodo(){
    let input = document.querySelector('#addNew') as HTMLInputElement;
    let inputValue = input.value;
    console.log(inputValue)
    let determinedId = this.todoService.getTodosArray().length;
    let id = determinedId + 1;
    console.log(id)


    fetch('http://localhost:3000/todos/', {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(
        {
          title: inputValue,
          completed: true,
        }
      )
    }).then(()=> {
      this.modalControl = true;
      setTimeout(()=> {
        this.arrayTodos.push(
        {
          id: id,
          title: inputValue,
          completed: true,
        }
      )
      this.modalControl = false;

      ;}, 2000)

    })
  }
}
