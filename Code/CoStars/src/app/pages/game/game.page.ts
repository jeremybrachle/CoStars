import { Component, OnInit} from '@angular/core';

// models:
import { Level } from '../../models/level';
import { Node } from '../../models/node';

// services
import { LevelService } from '../../services/level.service';

// modal connection
import { ModalController, NavParams } from '@ionic/angular';
import { AddNodePage } from '../../modals/add-node/add-node.page';


// tree node
// import { TreeNodeComponent } from '../../components/tree-node/tree-node.component';




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

  // return values from modal
  // name: String;

  // begin code:
  constructor(
    // make an instance of the level service (getting)
    private levelSelect: LevelService,
    public modalController: ModalController
    // public treeNode: TreeNodeComponent
  ) {}

  // when page loads
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


  // modal connection (will be called only from the tree node component)
  async addNodeFromModal(newType: string, treeSide: string) {
    // create the modal and connect its component
    const modal = await this.modalController.create({
      component: AddNodePage,
      cssClass: 'add-node-modal'
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

}
