import { TestBed } from '@angular/core/testing';

import { PermisoLoginGuard } from './permiso-login.guard';

describe('PermisoLoginGuard', () => {
  let guard: PermisoLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
