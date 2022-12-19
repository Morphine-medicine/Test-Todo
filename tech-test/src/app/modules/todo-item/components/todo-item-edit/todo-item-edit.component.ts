import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoItemsAPIService} from '../../services/todo-items-api.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TodoItemDTO} from '../todo-item/todo-item.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.scss']
})
export class TodoItemEditComponent implements OnInit, OnDestroy {

  item: TodoItemDTO = {done: false, id: 0, description: '', label: '', category: ''};

  private mode: 'Create' | 'Patch' = 'Create';
  private readonly unsubscribeObs$: Subject<void> = new Subject<void>();
  constructor(
    private readonly apiCaller: TodoItemsAPIService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.router.url.split('/').pop();
    if (id) {
      this.mode = 'Patch';
      this.apiCaller.getTodoItem(id).pipe(takeUntil(this.unsubscribeObs$)).subscribe((value: TodoItemDTO) => {
        this.item = value;
      });
    }
  }

  get isSubmitDisabled() {
    return !this.item.category || !this.item.label || !this.item.description;
  }

  submitItem() {
    if (this.mode === 'Create') {
      this.item.done = false;
      this.apiCaller.addItem(this.item);
    } else {
      this.apiCaller.patchItem(this.item);
    }
  }

  navigateToList() {
    this.router.navigateByUrl('');
  }

  ngOnDestroy() {
    this.unsubscribeObs$.next();
    this.unsubscribeObs$.complete();
  }
}
