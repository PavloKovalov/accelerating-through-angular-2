import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'racing-app',
  template: `
    <h1>{{ heading }}</h1>
    <ul>
      <li *ngFor="let race of races">
        <h2>{{ race.name }}</h2>
        <p>{{ race.date }}</p>
        <p>{{ race.about }}</p>
      </li>
    </ul>
  `
})
class AppComponent {
  heading = 'Ultra Racing Schedule';

  races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "Drift down the streets of a city almost sunk under the ocean.",
    "entryFee": 4700
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "Fly between buildings in the electronic sky.",
    "entryFee": 4300
  }];
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic()
    .bootstrapModule(AppModule);
