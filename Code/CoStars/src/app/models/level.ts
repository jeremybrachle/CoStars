export class Level {
    constructor(
      // the current level
      public levelNumber: number,
      // strings for the beginning actor/movie
      public name1: string,
      public name2: string,
      // string for game type (starting with 'actor' or 'film')
      public gameType: string
      ) { }
  }

