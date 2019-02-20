import { Component, OnInit} from '@angular/core';

// models:
import { Level } from '../../models/level';
import { Node } from '../../models/node';

// services
import { LevelService } from '../../services/level.service';

// modal connection
import { ModalController } from '@ionic/angular';
import { AddNodePage } from '../../modals/add-node/add-node.page';
import { InfoModalPage } from '../../modals/info-modal/info-modal.page';



@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  // variables
  // level object for holding the level data
  currLevel: Level;
  // arrays for the game tree:
  // left tree
  leftTree = new Array;
  // right tree
  rightTree = new Array;

  // begin code:
  constructor(
    // make an instance of the level service (getting)
    private levelService: LevelService,
    public modalController: ModalController
    // public treeNode: TreeNodeComponent
  ) {}

  // when page loads
  ngOnInit() {
    // load the selected game
    this.currLevel = this.levelService.getLevel();

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


  // function for showing the info modal
  async showInfo() {
    // create the modal and connect its component
    const iModal = await this.modalController.create({
      component: InfoModalPage,
      cssClass: ''
    });

    // show the modal
    await iModal.present();


  }

  // modal connection (will be called only from the tree node component)
  async addNodeFromModal(newType: string, treeSide: string) {
    // create the modal and connect its component
    const modal = await this.modalController.create({
      component: AddNodePage,
      cssClass: 'add-node-modal',
      componentProps: {newType: newType}
    });

    // show the modal
    await modal.present();

    // wait for the dismissal of the modal and get the return value
    modal.onDidDismiss().then((returnVal) => {
        // parse the new name from the object returned
        let newName = returnVal['data'];

        // but first check to see if the value is null
        // if not null we can add this to tree
        if (newName != null) {
          // make a new node object
          let newNode = new Node(
            newName,
            newType,
            false,
            true
          );
          // now put into tree
          // but check what side it will go to
          if (treeSide === 'left') {
            // make sure that the current last element is no longer the last
            this.leftTree[this.leftTree.length - 1].isLast = false;
            // add new node
            this.leftTree.push(newNode);
          } else {
            // make sure that the current last element is no longer the last
            this.rightTree[this.rightTree.length - 1].isLast = false;
            // add new node
            this.rightTree.push(newNode);
          }
        }
    });
  }

  // function for checking the game tree validity. for right now, only see if nodes match up... no db functionality yet :(
  checkGame() {
    // make sure bottom element of each tree have opposite type (this is done through the disabled boolean in the html)
    // later the program will check to see if the actual node names are correct for their movies
    // for now just return the tree depth they ended up with
    // depth = (length of longest tree - 1)
    if (this.leftTree.length > this.rightTree.length) {
      console.log('Score: ' + (this.leftTree.length - 1));
    } else {
      console.log('Score: ' + (this.rightTree.length - 1));
    }

    // add functionality for changing the star icon on the main page since the level is won...
  }

  // function for clearing the current game (pop both trees until only the given nodes are left)
  clearGame() {
    // pop the left tree
    let popLeft = this.leftTree.length - 1;

    // loop and pop the nodes
    for (let i = 0; i < popLeft; i++) {
      this.leftTree.pop();
    }
    // now assign the bottom most node as the last
    this.leftTree[0].isLast = true;

    // now do the same for the right tree
    let popRight = this.rightTree.length - 1;

    // loop and pop the nodes
    for (let i = 0; i < popRight; i++) {
      this.rightTree.pop();
    }
    // now assign the bottom most node as the last
    this.rightTree[0].isLast = true;

  }

}
