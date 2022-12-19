import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoFilterPipe} from './pipes/todo-filter.pipe';
import {FormsModule} from '@angular/forms';
import {TodoItemEditComponent} from './components/todo-item-edit/todo-item-edit.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoFilterPipe,
    TodoItemEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TodoListModule { }
