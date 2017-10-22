import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistPreviewComponent } from './checklist-preview.component';

describe('ChecklistPreviewComponent', () => {
  let component: ChecklistPreviewComponent;
  let fixture: ComponentFixture<ChecklistPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
