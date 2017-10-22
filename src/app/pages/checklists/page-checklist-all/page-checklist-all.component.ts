import { Component, OnInit } from '@angular/core';
import { ChecklistsService } from '../../../services/checklists/checklists.service';
import { ModelChecklist } from '../../../models/model-checklist';

@Component({
  selector: 'app-page-checklist-all',
  templateUrl: './page-checklist-all.component.html',
  styleUrls: ['./page-checklist-all.component.scss']
})
export class PageChecklistAllComponent implements OnInit {
  checklists: ModelChecklist[];

  constructor(private checklistsService: ChecklistsService) { }

  ngOnInit() {
    this.checklistsService.all().then((results) => {
      this.checklists = results;
    });
  }

  onDelete(checklist: ModelChecklist) {
    const index = this.checklists.indexOf(checklist);
    this.checklists.splice(index, 1);
  }
}
