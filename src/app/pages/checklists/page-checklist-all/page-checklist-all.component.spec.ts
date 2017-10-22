import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChecklistAllComponent } from './page-checklist-all.component';

describe('PageChecklistAllComponent', () => {
  let component: PageChecklistAllComponent;
  let fixture: ComponentFixture<PageChecklistAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChecklistAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChecklistAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
