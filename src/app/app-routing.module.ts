import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeloginComponent} from "./Component/employeelogin/employeelogin.component";
import {CustomerloginComponent} from "./Component/customerlogin/customerlogin.component";
import {HomepageComponent} from "./Component/homepage/homepage.component";

const routes: Routes = [
  {
    path: "", component: HomepageComponent, pathMatch: "full"
  },

  {
    path: "employee", component: EmployeeloginComponent, pathMatch: "full"
  },

  {
    path: "customer", component: CustomerloginComponent, pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
