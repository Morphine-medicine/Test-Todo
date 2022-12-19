import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {TodoItemsAPIService} from '../../services/todo-items-api.service';
import {takeUntil} from 'rxjs/operators';
import {TodoItemDTO} from '../todo-item/todo-item.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  filterValue: string;

  constructor(
    readonly apiCaller: TodoItemsAPIService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.apiCaller.getTodoList();
  }

  onAddButtonClick() {
    this.router.navigateByUrl('/edit/0');
  }

}
