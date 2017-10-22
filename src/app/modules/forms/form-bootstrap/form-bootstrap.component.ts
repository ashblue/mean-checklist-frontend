import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-bootstrap',
  templateUrl: './form-bootstrap.component.html',
  styleUrls: ['./form-bootstrap.component.scss']
})
export class FormBootstrapComponent implements OnInit, AfterViewInit {
  loading = false;
  messageError: string;

  @Input() onSubmit: (complete: Function) => void;

  @ContentChildren(NgModel) inputs: QueryList<NgModel>;
  @ViewChild(NgForm) form: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Angular forms have no recollection of <ng-content> by default, so we must manually inject
    // the form data
    this.inputs.forEach(input => {
      this.form.addControl(input);
    });
  }

  /**
   * Calls submit and waits for a complete callback. As soon as complete is detected the form will be re-enabled.
   */
  submit() {
    this.messageError = null;
    this.loading = true;

    if (this.onSubmit) {
      this.onSubmit(this.complete.bind(this));
      return;
    }

    this.complete();
  }

  complete() {
    this.loading = false;
  }
}
