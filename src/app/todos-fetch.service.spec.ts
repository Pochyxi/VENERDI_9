import { TestBed } from '@angular/core/testing';

import { TodosFetchService } from './todos-fetch.service';

describe('TodosFetchService', () => {
  let service: TodosFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
