import { TestBed } from '@angular/core/testing';

import { ErrorHandler } from './error.handler';

describe('ErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandler = TestBed.get(ErrorHandler);
    expect(service).toBeTruthy();
  });
});
