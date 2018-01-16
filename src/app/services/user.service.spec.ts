import {
  fakeAsync,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';
import {
  HttpModule,
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import { userService } from './user.service';
import { ErrorService } from './error.service';
import { User } from '../model/user.interface';

class ErrorServiceStub{}

describe('userService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        userService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, 
          useFactory: (backend, options) => new Http(backend, options), 
          deps: [MockBackend, BaseRequestOptions] 
        },
        {provide: ErrorService, useClass: ErrorServiceStub}
      ]
    });
  });

  it('should be created', inject([userService], (service: userService) => {
    expect(service).toBeTruthy();
  }));
});
