import { TestBed } from '@angular/core/testing';

import { PersonserviceService } from './personservice.service';

describe('PersonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    //const service: PersonserviceService = TestBed.get(PersonserviceService);
    const service: PersonserviceService =  new PersonserviceService(null);
    expect(service).toBeTruthy();
  });
});
