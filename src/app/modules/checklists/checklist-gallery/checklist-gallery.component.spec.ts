import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistGalleryComponent } from './checklist-gallery.component';

describe('ChecklistGalleryComponent', () => {
  let component: ChecklistGalleryComponent;
  let fixture: ComponentFixture<ChecklistGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
