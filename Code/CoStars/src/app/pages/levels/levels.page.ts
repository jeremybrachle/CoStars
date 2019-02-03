import { Component, OnInit } from '@angular/core';

import { NavController} from '@ionic/angular';


import {Level} from '../../models/level';
import { LevelService } from '../../services/level.service';


@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  // make an object for navigating
  constructor(
    public navCtrl: NavController,
    private levelService: LevelService) { }
  // constructor() { }

  // generate the levels
  // will be pulled from a database eventually
  levels = [
    new Level(1, 'George Clooney', 'Matt Damon'),
    new Level(2, 'Tom Cruise', 'Ben Stiller'),
    new Level(3, 'Leonardo DiCaprio', 'Robert Downey Jr.')
  ];


  ngOnInit() {
  }

  // function for beginning game given the level
  beginGame(currLevel: Level) {

    // set the level selected
    this.levelService.setLevel(currLevel.number, currLevel.actor1, currLevel.actor2);


  }

}
