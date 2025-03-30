import { TestBed } from '@angular/core/testing';

import { MineralService } from './mineral.service';

describe('MineralService', () => {
  let service: MineralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
