import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChecklistComponent } from './form-checklist.component';

describe('FormChecklistComponent', () => {
  let component: FormChecklistComponent;
  let fixture: ComponentFixture<FormChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
