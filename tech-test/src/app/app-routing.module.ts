import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './modules/todo-item/components/todo-list/todo-list.component';
import {TodoItemEditComponent} from './modules/todo-item/components/todo-item-edit/todo-item-edit.component';


const routes: Routes = [{
  path: '',
  component: TodoListComponent,
  pathMatch: 'full',
  }, {
  path: 'edit/:id', component: TodoItemEditComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
