import { Injectable } from '@angular/core';

@Injectable()
export class LevelService {

// set up the variables to be returned
myLevel: any;
levelNumber: number;
actor1: string;
actor2: string;

constructor() {
  this.myLevel = {
    'levelNumber': this.levelNumber,
    'actor1': this.actor1,
    'actor2': this.actor2
  };
}

// set the level given the data
setLevel(number, a1, a2) {
  this.myLevel.levelNumber = number;
  this.myLevel.actor1 = a1;
  this.myLevel.actor2 = a2;
}

// return the object
getLevel(): any {
  return this.myLevel;
}

}
