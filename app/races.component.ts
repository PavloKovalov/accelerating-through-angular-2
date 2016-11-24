import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';
import { RACES } from './mocks';

@Component({
    selector: 'races',
    styles: [
      require('./races.component.css!text')
    ],
    template: require('./races.component.html!text')
})
export class RacesComponent {
  races: Race[] = [];
  cash = 10000;

  constructor(private racingDataService: RaceService) { }

  ngOnInit() {
      this.racingDataService.getRaces()
        .subscribe(races => this.races = races);
  }

  totalCost() {
    if (Array.isArray(this.races)) {
        return this.races
            .filter(race => race.isRacing)
            .reduce((prev, next) => prev + next.entryFee, 0);
    }
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  cancelRace(race) {
      race.isRacing = false;
  }

  enterRace(race) {
      if (race.entryFee > this.cashLeft()) {
        alert('You don\'t have enough cash');
        return;
      }
      race.isRacing = true;
  }
}
