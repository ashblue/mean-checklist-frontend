import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelUser } from '../../../models/model-user';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBootstrapComponent } from '../form-bootstrap/form-bootstrap.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {
  @ViewChild(FormBootstrapComponent) form: FormBootstrapComponent;

  user: ModelUser = new ModelUser();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createUser = (complete: Function) => {
    this.authService.register(this.user)
      .then(this.logInNewUser)
      .catch((response) => {
        this.form.messageError = response.message;
        complete();
      });
  };

  logInNewUser = (user: ModelUser) => {
    this.authService.login(this.user)
      .then(() => {
        this.router.navigateByUrl('/');
      }).catch(() => {
        this.router.navigateByUrl('/auth/login');
      });
  }
}
