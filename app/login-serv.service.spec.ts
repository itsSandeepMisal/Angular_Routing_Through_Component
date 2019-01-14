import { TestBed } from '@angular/core/testing';

import { LoginServService } from './login-serv.service';

describe('LoginServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServService = TestBed.get(LoginServService);
    expect(service).toBeTruthy();
  });
});
