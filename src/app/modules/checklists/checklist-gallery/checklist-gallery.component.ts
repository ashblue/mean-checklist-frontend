import { Component, Input, OnInit } from '@angular/core';
import { ModelChecklist } from '../../../models/model-checklist';

@Component({
  selector: 'app-checklist-gallery',
  templateUrl: './checklist-gallery.component.html',
  styleUrls: ['./checklist-gallery.component.scss']
})
export class ChecklistGalleryComponent implements OnInit {
  @Input() checklists: ModelChecklist[];

  constructor() { }

  ngOnInit() {
  }
}
