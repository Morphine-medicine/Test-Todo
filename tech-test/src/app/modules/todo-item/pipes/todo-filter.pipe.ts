import { Pipe, PipeTransform } from '@angular/core';
import {TodoItemDTO} from '../components/todo-item/todo-item.component';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(items: TodoItemDTO[], searchValue: string): TodoItemDTO[] {
    if (!items) {
      return [];
    }
    if (!searchValue) {
      return items;
    }
    const searchText = searchValue.toLowerCase();

    return items.filter(item => item.label.toLowerCase().includes(searchText));
  }

}
