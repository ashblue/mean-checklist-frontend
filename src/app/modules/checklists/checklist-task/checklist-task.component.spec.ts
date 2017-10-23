import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTaskComponent } from './checklist-task.component';

describe('ChecklistTaskComponent', () => {
  let component: ChecklistTaskComponent;
  let fixture: ComponentFixture<ChecklistTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
