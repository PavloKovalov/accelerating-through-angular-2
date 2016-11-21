import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './race.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RacesComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ RaceService ]
})
class AppModule {}

platformBrowserDynamic()
    .bootstrapModule(AppModule);
