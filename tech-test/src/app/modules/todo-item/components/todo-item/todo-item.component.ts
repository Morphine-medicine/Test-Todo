import {Component, Input, OnInit} from '@angular/core';
import {TodoItemsAPIService} from '../../services/todo-items-api.service';
import {Router} from '@angular/router';

export interface TodoItemDTO {
  id: number;
  label: string;
  description: string;
  category: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  item: TodoItemDTO = null;

  constructor(
    private readonly router: Router,
    private readonly apiCaller: TodoItemsAPIService
  ) { }

  ngOnInit(): void {
  }

  toggleItemDone() {
    const itemCopy = {...this.item};
    itemCopy.done = !itemCopy.done;
    this.apiCaller.patchItem(itemCopy);
  }

  deleteItem() {
    this.apiCaller.deleteItem(this.item.id);
  }

  navigateToEdit() {
    this.router.navigateByUrl(`/edit/${this.item.id}`);
  }
}
