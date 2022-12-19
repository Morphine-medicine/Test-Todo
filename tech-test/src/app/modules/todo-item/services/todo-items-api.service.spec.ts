import { TestBed } from '@angular/core/testing';

import { TodoItemsAPIService } from './todo-items-api.service';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('TodoItemsAPIService', () => {
  let service: TodoItemsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoItemsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
