import { Component, OnInit } from '@angular/core';

// model and service for level
import { Level } from '../../models/level';
import { LevelService } from '../../services/level.service';

// modal controller
import { ModalController } from '@ionic/angular';


// settings modal
import { SettingsModalPage } from '../../modals/settings-modal/settings-modal.page';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  // make an object for navigating
  constructor(
    // make an instance of the level service (setting)
    private levelService: LevelService,
    public modalController: ModalController
  ) {}

  // generate the levels
  // will be pulled from a database eventually
  levels = [
    new Level(1, 'George Clooney', 'Matt Damon', 'actor', true),
    new Level(2, 'Tom Cruise', 'Ben Stiller', 'actor', false),
    new Level(3, 'Harry Potter and the Chamber of Secrets', 'Fantastic Beasts and Where to Find Them', 'film', false),
    new Level(4, 'Leonardo DiCaprio', 'Robert Downey Jr.', 'actor', false),
    new Level(5, 'Chris Evans', 'Chris Pine', 'actor', false)
  ];


  ngOnInit() {
  }

  // function for beginning game given the level
  beginGame(currLevel: Level) {
    // set the level selected
    this.levelService.setLevel(currLevel.levelNumber, currLevel.name1, currLevel.name2, currLevel.gameType, currLevel.isSolved);
  }

  // show the setting modal
  async showSettings() {
    // create the modal and connect its component
    const modal = await this.modalController.create({
      component: SettingsModalPage,
      cssClass: ''
    });

    // show the modal
    await modal.present();
  }

}
