import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelTask } from '../../../models/model-task';
import { ChecklistsService } from '../../../services/checklists/checklists.service';
import { ModelChecklist } from '../../../models/model-checklist';

@Component({
  selector: 'app-checklist-task',
  templateUrl: './checklist-task.component.html',
  styleUrls: ['./checklist-task.component.scss']
})
export class ChecklistTaskComponent implements OnInit {
  syncing: boolean;

  @Input() checklist: ModelChecklist;
  @Input() task: ModelTask;
  @Output() onDestroy: EventEmitter<ModelTask> = new EventEmitter<ModelTask>();

  constructor(private checklistService: ChecklistsService) { }

  ngOnInit() {
  }

  toggleComplete() {
    if (this.syncing) {
      return;
    }

    this.syncing = true;
    this.task.complete = !this.task.complete;

    this.checklistService.updateTask(this.checklist, this.task)
      .then(res => {
        this.syncing = false;
        this.task = res;
      }, () => {
        this.syncing = false;
      });
  }

  destroy() {
    if (this.syncing) {
      return;
    }

    this.syncing = true;
    this.checklistService.deleteTask(this.checklist, this.task)
      .then(() => {
        this.onDestroy.emit(this.task);
      }, () => {
        this.onDestroy.emit(this.task);
      });
  }
}
