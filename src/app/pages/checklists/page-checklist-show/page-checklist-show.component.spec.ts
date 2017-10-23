import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChecklistShowComponent } from './page-checklist-show.component';

describe('PageChecklistShowComponent', () => {
  let component: PageChecklistShowComponent;
  let fixture: ComponentFixture<PageChecklistShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChecklistShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChecklistShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
