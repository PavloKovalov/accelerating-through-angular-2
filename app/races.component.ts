import { Component } from '@angular/core';
import { Race } from './race';
import { RACES } from './mocks';

@Component({
    selector: 'races',
    templateUrl: 'app/races.component.html',
    styleUrls: ['app/races.component.css']
}) 
export class RacesComponent {
  races: Race[]
  cash = 10000;

  ngOnInit() {
      this.races = RACES;
  }

  totalCost() {
    return this.races
      .filter(race => race.isRacing)
      .reduce((prev, next) => prev + next.entryFee, 0);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }
}