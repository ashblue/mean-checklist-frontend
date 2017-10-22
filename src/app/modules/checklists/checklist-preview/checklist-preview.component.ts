import * as moment from 'moment';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelChecklist } from '../../../models/model-checklist';
import { ChecklistsService } from '../../../services/checklists/checklists.service';

@Component({
  selector: 'app-checklist-preview',
  templateUrl: './checklist-preview.component.html',
  styleUrls: ['./checklist-preview.component.scss']
})
export class ChecklistPreviewComponent implements OnInit {
  isDeleting: boolean;

  @Input() checklist: ModelChecklist;
  @Output() onDelete: EventEmitter<ModelChecklist> = new EventEmitter<ModelChecklist>();

  get completedTaskCount() {
    const complete = this.checklist.tasks.filter((task) => {
      return task.complete === true;
    });

    return complete.length;
  }

  get relativeDate() {
    return moment(this.checklist.createdAt).fromNow();
  }

  constructor(private checklistService: ChecklistsService) { }

  ngOnInit() {
  }

  delete() {
    if (this.isDeleting || !confirm('Are you sure you want to delete this checklist? Doing so cannot be undone.')) {
      return;
    }

    this.isDeleting = true;
    this.checklistService.delete(this.checklist)
      .then(() => {
        this.onDelete.emit(this.checklist);
      }, () => {
        this.isDeleting = false;
        alert('Could not delete this checklist item. Please refresh the page and try again.');
      });
  }
}
