import { TestBed } from '@angular/core/testing';
import { Pengaturan } from './pengaturan';

describe('Pengaturan', () => {
  let service: Pengaturan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pengaturan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
