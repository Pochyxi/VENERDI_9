import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletatiComponent } from './completati/completati.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { NavTodosComponent } from './nav-todos/nav-todos.component';
import { ModaleComponent } from './modale/modale.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletatiComponent,
    SingleTodoComponent,
    NavTodosComponent,
    ModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
