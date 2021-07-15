import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheatherReportComponent } from './wheather-report/wheather-report.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './table/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [WheatherReportComponent, HomeComponent, TableComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    MatButtonModule
  ],
  exports: [WheatherReportComponent, HomeComponent, UserDetailsComponent, MatButtonModule]
})
export class WheatherModule { }
