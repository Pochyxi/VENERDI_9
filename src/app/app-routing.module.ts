import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiComponent } from './completati/completati.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component: TodosComponent,
  },
  {
    path: 'completati',
    component: CompletatiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
