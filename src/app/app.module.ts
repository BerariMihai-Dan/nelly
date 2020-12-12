import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FilmComponent } from './pages/film/film.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';
import { Film2Component } from './pages/film2/film2.component';
import { Film3Component } from './pages/film3/film3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmComponent,
    ConclusionComponent,
    Film2Component,
    Film3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
