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
import { NoauthOnlyGuard } from './guards/noauth/noauth-only.guard';
import { UsersOnlyGuard } from './guards/users/users-only.guard';
import { PageChecklistAllComponent } from './pages/checklists/page-checklist-all/page-checklist-all.component';
import { ChecklistGalleryComponent } from './modules/checklists/checklist-gallery/checklist-gallery.component';
import { ChecklistPreviewComponent } from './modules/checklists/checklist-preview/checklist-preview.component';
import { ChecklistsService } from './services/checklists/checklists.service';
import { PageChecklistShowComponent } from './pages/checklists/page-checklist-show/page-checklist-show.component';
import { FormChecklistComponent } from './modules/forms/form-checklist/form-checklist.component';
import { Page404Component } from './pages/page404/page404.component';

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
    FormLoginComponent,
    PageChecklistAllComponent,
    ChecklistGalleryComponent,
    ChecklistPreviewComponent,
    PageChecklistShowComponent,
    FormChecklistComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    ChecklistsService,
    NoauthOnlyGuard,
    UsersOnlyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
