import { Component, OnInit } from '@angular/core';
import { ChecklistsService } from '../../../services/checklists/checklists.service';
import { ModelChecklist } from '../../../models/model-checklist';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-checklist-show',
  templateUrl: './page-checklist-show.component.html',
  styleUrls: ['./page-checklist-show.component.scss']
})
export class PageChecklistShowComponent implements OnInit {
  id: string;
  checklist: ModelChecklist;

  constructor(
    private serviceChecklist: ChecklistsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p.id;
    });

    this.serviceChecklist.get(this.id)
      .then((checklist) => {
        this.checklist = checklist;
      }, () => {
        this.router.navigateByUrl('/404');
      });
  }
}
