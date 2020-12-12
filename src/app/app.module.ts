import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';
import { Film2Component } from './pages/film2/film2.component';
import { Film3Component } from './pages/film3/film3.component';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { Film1Component } from './pages/film1/film1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Film1Component,
    ConclusionComponent,
    Film2Component,
    Film3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
