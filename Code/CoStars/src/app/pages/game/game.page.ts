import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../services/level.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  // make a variable for holding the level data
  currLevel: any;

  constructor(
    private levelSelect: LevelService
  ) {}

  ngOnInit() {
    // load the selected game
    this.currLevel = this.levelSelect.getLevel();
    // console.log(this.currLevel.levelNumber);
  }

}
