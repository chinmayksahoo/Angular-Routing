import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditInsComponent } from './edit-ins/edit-ins.component';
import { LoginGuard } from './Guard/login.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ShowInsuranceComponent } from './show-insurance/show-insurance.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register/:name/:email', component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {
    path:'dashboard', 
    component:DashboardComponent,
    canActivate:[LoginGuard],
    children:[
      {path:'show-ins', component:ShowInsuranceComponent,
        children:[
          {path:'edit-ins',component:EditInsComponent}
        ]
      },
      {path:'add-ins', component:AddInsuranceComponent}
    ]
  },
  {path:'', component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
