import * as moment from 'moment';

import { Component, Input, OnInit } from '@angular/core';
import { ModelChecklist } from '../../../models/model-checklist';

@Component({
  selector: 'app-checklist-preview',
  templateUrl: './checklist-preview.component.html',
  styleUrls: ['./checklist-preview.component.scss']
})
export class ChecklistPreviewComponent implements OnInit {
  @Input() checklist: ModelChecklist;

  get completedTaskCount() {
    const complete = this.checklist.tasks.filter((task) => {
      return task.complete === true;
    });

    return complete.length;
  }

  get relativeDate() {
    return moment(this.checklist.createdAt).fromNow();
  }

  constructor() { }

  ngOnInit() {
  }

}
