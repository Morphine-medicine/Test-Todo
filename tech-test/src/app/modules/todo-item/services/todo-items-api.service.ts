import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {TodoItemDTO} from '../components/todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsAPIService {

  todoList$: BehaviorSubject<TodoItemDTO[]> = new BehaviorSubject<TodoItemDTO[]>(null);
  private values_: TodoItemDTO[] = [];
  constructor(private readonly http: HttpClient) { }

  getTodoList(): void {
    this.http.get('http://localhost:3000/tasks').subscribe((values: TodoItemDTO[]) => {
      this.values_ = values;
      this.todoList$.next(this.values_);
    });
  }

  getTodoItem(id: number): Observable<TodoItemDTO> {
    return this.http.get(`http://localhost:3000/tasks/${id}`) as Observable<TodoItemDTO>;
  }

  patchItem(value: TodoItemDTO): void {
    this.http.patch(`http://localhost:3000/tasks/${value.id}`, value).subscribe((updatedValue: TodoItemDTO) => {
      const index = this.values_.findIndex(item => item.id === updatedValue.id);
      this.values_[index] = updatedValue;
      this.todoList$.next(this.values_);
    });
  }

  deleteItem(id: number): void {
    this.http.delete(`http://localhost:3000/tasks/${id}`).subscribe((_) => {
      const index  = this.values_.findIndex(item => item.id === id);
      this.values_.splice(index, 1);
      this.todoList$.next(this.values_);
    });
  }

  addItem(value: TodoItemDTO): void {
    delete value.id;
    this.http.post(`http://localhost:3000/tasks`, value).subscribe((item: TodoItemDTO) => {
      this.values_.push(item);
      this.todoList$.next(this.values_);
    });
  }
}
