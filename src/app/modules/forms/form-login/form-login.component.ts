import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBootstrapComponent } from '../form-bootstrap/form-bootstrap.component';
import { ModelUser } from '../../../models/model-user';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  @ViewChild(FormBootstrapComponent) form: FormBootstrapComponent;

  user: ModelUser = new ModelUser();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login = (complete: Function) => {
    this.authService.login(this.user)
      .then(() => {
        this.router.navigateByUrl('/');
      }).catch((response) => {
        this.form.messageError = response.message;
        complete();
      });
  }
}
