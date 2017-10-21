import { Component, OnInit, Input } from '@angular/core';
import { ModelUser } from '../../../models/model-user';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {
  user: ModelUser = new ModelUser();

  constructor() { }

  ngOnInit() {
  }

  createUser(complete: Function) {
    console.log('submit form');
  }
}
