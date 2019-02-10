import { Component, OnInit} from '@angular/core';

// models:
import { Level } from '../../models/level';
import { Node } from '../../models/node';

// services
import { LevelService } from '../../services/level.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  // level object for holding the level data
  currLevel: Level;
  // arrays for the game tree:
  // left tree
  leftTree = new Array;
  // right tree
  rightTree = new Array;

  constructor(
    // make an instance of the level service (getting)
    private levelSelect: LevelService
  ) {}

  ngOnInit() {
    // load the selected game
    this.currLevel = this.levelSelect.getLevel();

    // set up the game trees with the initial nodes
    // use 'let' since the attributes will change as the user adds to the tree
    // left tree
    let initNodeLeft = new Node(
      this.currLevel.name1,
      this.currLevel.gameType,
      true,
      true
    );

    // put into tree
    this.leftTree.push(initNodeLeft);

    // right tree
    let initNodeRight = new Node(
      this.currLevel.name2,
      this.currLevel.gameType,
      true,
      true
    );
    // put into tree
    this.rightTree.push(initNodeRight);

  }

}
