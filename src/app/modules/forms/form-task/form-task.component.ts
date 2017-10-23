import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModelTask } from '../../../models/model-task';
import { FormBootstrapComponent } from '../form-bootstrap/form-bootstrap.component';
import { ChecklistsService } from '../../../services/checklists/checklists.service';
import { ModelChecklist } from '../../../models/model-checklist';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {
  task: ModelTask = new ModelTask();

  @ViewChild(FormBootstrapComponent) form: FormBootstrapComponent;
  @ViewChild('focus') focusEl: ElementRef;
  @Input() checklist: ModelChecklist;
  @Output() onCreate: EventEmitter<ModelTask> = new EventEmitter<ModelTask>();

  constructor(private checklistService: ChecklistsService) { }

  ngOnInit() {
  }

  create = (complete: Function) => {
    // Fixes an Angular 2 bug where the focused input crashes on form reset
    this.focusEl.nativeElement.focus();

    this.checklistService.createTask(this.checklist, this.task)
      .then((task) => {
        this.onCreate.emit(task);
        this.task = new ModelTask();
        complete();
        this.form.reset();
      }).catch((response) => {
        this.form.messageError = response.message;
        complete();
      });
  }
}
