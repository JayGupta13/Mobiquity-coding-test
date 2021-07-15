import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WheatherRoutingModule } from './components/wheater-routing.module';
import { WheatherModule } from './components/wheather.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingResolver } from './components/home-routing.resolver';
import { SearchPipe } from './custom-pipe/search.pipe';
import { ConfirmComponent } from './shared/confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    WheatherRoutingModule,
    WheatherModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [HomeRoutingResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
