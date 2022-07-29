import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosFetchService } from '../todos-fetch.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  arrayComplete:Todo [] = [];

  constructor( private todoService:TodosFetchService ) { }

  ngOnInit(): void {
    this.todoService.getTodosFetch().then(()=>{
      this.arrayComplete = this.todoService.getCompletedTodos()
      console.log(this.arrayComplete)
    });
  }
  deleteCompletedTodo(object:Todo):void {
    this.arrayComplete = this.arrayComplete.filter(todo=>todo.id != object.id);
  }
}
