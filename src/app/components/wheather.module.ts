import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheatherReportComponent } from './wheather-report/wheather-report.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [WheatherReportComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [WheatherReportComponent, HomeComponent]
})
export class WheatherModule { }
