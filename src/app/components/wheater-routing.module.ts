import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingResolver } from './home-routing.resolver';
import { HomeComponent } from './home/home.component';
import { WheatherReportComponent } from './wheather-report/wheather-report.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent,
  resolve : {
    data : HomeRoutingResolver
  }
},
  {path:'wheather-report', component: WheatherReportComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WheatherRoutingModule { }
