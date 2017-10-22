import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelChecklist } from '../../../models/model-checklist';

@Component({
  selector: 'app-checklist-gallery',
  templateUrl: './checklist-gallery.component.html',
  styleUrls: ['./checklist-gallery.component.scss']
})
export class ChecklistGalleryComponent implements OnInit {
  @Input() checklists: ModelChecklist[];
  @Output() onDelete: EventEmitter<ModelChecklist> = new EventEmitter<ModelChecklist>()

  constructor() { }

  ngOnInit() {
  }
}
