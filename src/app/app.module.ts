import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { Film1Component } from './pages/film1/film1.component';
import { Film2Component } from './pages/film2/film2.component';
import { Film3Component } from './pages/film3/film3.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Film1Component,
    Film2Component,
    Film3Component,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
