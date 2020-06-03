import { TestBed } from '@angular/core/testing';

import { CtrlphsService } from './ctrlphs.service';

describe('CtrlphsService', () => {
  let service: CtrlphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtrlphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
