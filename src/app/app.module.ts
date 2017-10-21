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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderDefaultComponent,
    FooterDefaultComponent,
    RegisterComponent,
    FormRegistrationComponent,
    FormBootstrapComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
