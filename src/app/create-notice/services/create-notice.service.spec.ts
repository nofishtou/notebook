import { TestBed } from '@angular/core/testing';

import { CreateNoticeService } from './create-notice.service';

describe('CreateNoticeService', () => {
  let service: CreateNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
