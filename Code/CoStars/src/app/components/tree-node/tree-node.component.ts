import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../models/node';
import { GamePage } from '../../pages/game/game.page';


@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  // accepts arguments from the game page
  // current node
  @Input() currNode: Node;
  // the actual array (for adding and deleting)
  @Input() gameTree: Array<Node>;
  // side of the tree being updated
  @Input() treeSide: string;


  // made an object for modal controller
  // constructor(public modalController: ModalController) { }

  constructor(
    // make a game page object (needed for calling modal)
    public gamePage: GamePage
  ) {}

  ngOnInit() {
  }


  // function for adding a new node
  // note: the actual pushing into the array will occur in the game page file
  addNode() {
    // set the new type
    // new type will be the opposite of the previous type
    let newType = '';
    // check this tree's bottom-most type
    if (this.gameTree[this.gameTree.length - 1].type === 'actor') {
      newType = 'film';
    } else {
      newType = 'actor';
    }
    // send the new type and the tree side to the modal
    this.gamePage.addNodeFromModal(newType, this.treeSide);
  }

  // function for removing the current node and all nodes below
  deleteNode() {
    // pop dat node of da tree yo
    // this will pop the clicked node and all nodes below it
    // check to see how many nodes will be popped
    // (number of pops) = (array size) - (index of current node)
    let pops = (this.gameTree.length) - (this.gameTree.indexOf(this.currNode));

    // loop and pop the nodes
    for (let i = 0; i < pops; i++) {
      this.gameTree.pop();
    }

    // now assign the bottom most node as the last
    this.gameTree[this.gameTree.length - 1].isLast = true;
  }

}
