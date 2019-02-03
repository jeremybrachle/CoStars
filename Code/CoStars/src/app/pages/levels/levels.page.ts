import { Component, OnInit } from '@angular/core';

import {Level} from '../../models/level';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  constructor() { }

  // generate the levels
  levels = [
    new Level(1, 'George Clooney', 'Matt Damon'),
    new Level(2, 'Tom Cruise', 'Ben Stiller'),
    new Level(3, 'Leonardo DiCaprio', 'Robert Downey Jr.')
  ];


  ngOnInit() {
  }

}
