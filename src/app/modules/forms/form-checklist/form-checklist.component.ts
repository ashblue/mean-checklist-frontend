import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModelChecklist } from '../../../models/model-checklist';
import { ChecklistsService } from '../../../services/checklists/checklists.service';
import { FormBootstrapComponent } from '../form-bootstrap/form-bootstrap.component';

@Component({
  selector: 'app-form-checklist',
  templateUrl: './form-checklist.component.html',
  styleUrls: ['./form-checklist.component.scss']
})
export class FormChecklistComponent implements OnInit {
  checklist: ModelChecklist = new ModelChecklist();

  @ViewChild(FormBootstrapComponent) form: FormBootstrapComponent;
  @ViewChild('focus') focusEl: ElementRef;
  @Output() onCreate: EventEmitter<ModelChecklist> = new EventEmitter<ModelChecklist>();

  constructor(private checklistService: ChecklistsService) { }

  ngOnInit() {
  }

  create = (complete: Function) => {
    // Fixes an Angular 2 bug where the focused input crashes on form reset
    this.focusEl.nativeElement.focus();

    this.checklistService.create(this.checklist)
      .then((result) => {
        this.onCreate.emit(result);
        this.checklist = new ModelChecklist();
        complete();
        this.form.reset();
      }).catch((response) => {
        this.form.messageError = response.message;
        complete();
    });
  }
}
