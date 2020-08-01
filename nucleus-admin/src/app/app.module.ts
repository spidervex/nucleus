import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { SessionComponent } from './session/session.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SessionComponent,
    UsersComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    // PrimeNG
    MenuModule,
    MenubarModule,
    ButtonModule,
    AccordionModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }