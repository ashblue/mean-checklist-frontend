import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NoauthOnlyGuard } from './guards/noauth/noauth-only.guard';
import { UsersOnlyGuard } from './guards/users/users-only.guard';
import { PageChecklistAllComponent } from './pages/checklists/page-checklist-all/page-checklist-all.component';
import { PageChecklistShowComponent } from './pages/checklists/page-checklist-show/page-checklist-show.component';

const routes: Routes = [
  {
    canActivate: [NoauthOnlyGuard],
    path: '',
    component: HomeComponent
  },
  {
    canActivate: [NoauthOnlyGuard],
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    canActivate: [UsersOnlyGuard],
    path: 'checklists',
    children: [
      {
        path: '',
        component: PageChecklistAllComponent
      },
      {
        path: ':id',
        component: PageChecklistShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
