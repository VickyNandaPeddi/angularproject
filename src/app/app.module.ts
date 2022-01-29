import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { EmployeeloginComponent } from './Component/employeelogin/employeelogin.component';
import { CustomerloginComponent } from './Component/customerlogin/customerlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EmployeeloginComponent,
    CustomerloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
