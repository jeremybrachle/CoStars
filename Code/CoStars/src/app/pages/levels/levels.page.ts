import { Component, OnInit } from '@angular/core';

// model and service for level
import { Level } from '../../models/level';
import { LevelService } from '../../services/level.service';


@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  // make an object for navigating
  constructor(
    // make an instance of the level service (setting)
    private levelService: LevelService
  ) {}

  // generate the levels
  // will be pulled from a database eventually
  levels = [
    new Level(1, 'George Clooney', 'Matt Damon', 'actor'),
    new Level(2, 'Tom Cruise', 'Ben Stiller', 'actor'),
    new Level(3, 'Chamber of Secrets', 'Fantastic Beasts 1', 'film'),
    new Level(4, 'Leonardo DiCaprio', 'Robert Downey Jr.', 'actor'),
    new Level(5, 'Chris Evans', 'Chris Pine', 'actor')
  ];


  ngOnInit() {
  }

  // function for beginning game given the level
  beginGame(currLevel: Level) {

    // set the level selected
    this.levelService.setLevel(currLevel.levelNumber, currLevel.name1, currLevel.name2, currLevel.gameType);

  }

}
