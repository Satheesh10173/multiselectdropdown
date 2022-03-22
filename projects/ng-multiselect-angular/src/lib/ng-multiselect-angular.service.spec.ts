import { TestBed } from '@angular/core/testing';

import { NgMultiselectAngularService } from './ng-multiselect-angular.service';

describe('NgMultiselectAngularService', () => {
  let service: NgMultiselectAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMultiselectAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
