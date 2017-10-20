import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderDefaultComponent } from './modules/layouts/headers/header-default/header-default.component';
import { FooterDefaultComponent } from './modules/layouts/footers/footer-default/footer-default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderDefaultComponent,
    FooterDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
