// this service acts as a helper to the level model
// it will get and set the current level

import { Injectable } from '@angular/core';
import { Level } from '../models/level';

@Injectable()
export class LevelService {

// make a Level object
myLevel: Level;

constructor() {
  // make a default level object for the current level
  this.myLevel = new Level(0, '', '', '', false);
}

// set the current level
setLevel(number: number, n1: string, n2: string, gType: string, won: boolean) {
  this.myLevel.levelNumber = number;
  this.myLevel.name1 = n1;
  this.myLevel.name2 = n2;
  this.myLevel.gameType = gType;
  this.myLevel.isSolved = won;
}

// return the object
getLevel(): Level {
  return this.myLevel;
}

}
