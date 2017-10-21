import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderDefaultComponent } from './modules/layouts/headers/header-default/header-default.component';
import { FooterDefaultComponent } from './modules/layouts/footers/footer-default/footer-default.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FormRegistrationComponent } from './modules/forms/form-registration/form-registration.component';
import { FormsModule } from '@angular/forms';
import { FormBootstrapComponent } from './modules/forms/form-bootstrap/form-bootstrap.component';
import { PageTitleComponent } from './modules/layouts/page-title/page-title.component';
import { AuthService } from './services/auth/auth.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { FormLoginComponent } from './modules/forms/form-login/form-login.component';
import { NoauthOnlyGuard } from './guard/noauth/noauth-only.guard';
import { UsersOnlyGuard } from './guard/users/users-only.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderDefaultComponent,
    FooterDefaultComponent,
    RegisterComponent,
    FormRegistrationComponent,
    FormBootstrapComponent,
    PageTitleComponent,
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    NoauthOnlyGuard,
    UsersOnlyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
