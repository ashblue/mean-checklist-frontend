import { TestBed, inject } from '@angular/core/testing';

import { ChecklistsService } from './checklists.service';

describe('ChecklistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecklistsService]
    });
  });

  it('should be created', inject([ChecklistsService], (service: ChecklistsService) => {
    expect(service).toBeTruthy();
  }));
});
