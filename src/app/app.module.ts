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
import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './pages/components/navbar/navbar.component';

const routes :Routes = [
   {path: '', component:HeaderComponent},
   {path: 'film1', component:Film1Component},
   {path: 'film2', component:Film2Component},
   {path: 'film3', component:Film3Component},
   {path: 'conclusion', component:ConclusionComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Film1Component,
    ConclusionComponent,
    Film2Component,
    Film3Component,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
