import { TestBed, async, inject } from '@angular/core/testing';

import { NoauthOnlyGuard } from './noauth-only.guard';

describe('NoauthOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoauthOnlyGuard]
    });
  });

  it('should ...', inject([NoauthOnlyGuard], (guard: NoauthOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
