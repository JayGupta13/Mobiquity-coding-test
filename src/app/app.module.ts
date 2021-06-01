import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WheatherRoutingModule } from './components/wheater-routing.module';
import { WheatherModule } from './components/wheather.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingResolver } from './components/home-routing.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WheatherRoutingModule,
    WheatherModule,
    HttpClientModule
  ],
  providers: [HomeRoutingResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
