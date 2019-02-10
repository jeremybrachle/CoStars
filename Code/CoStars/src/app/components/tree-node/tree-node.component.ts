import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../models/node';


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

  constructor() { }

  ngOnInit() {
  }

  addNode() {
    // logic for adding to the game tree:
    // make the current last element no longer the last
    this.gameTree[this.gameTree.length - 1].isLast = false;

    // build the new node to be added:
    // new type will be the opposite of the previous type
    let newType = '';
    if (this.gameTree[this.gameTree.length - 1].type === 'actor') {
      newType = 'film';
    } else {
      newType = 'actor';
    }

    // create the new node object
    let newNode = new Node('new node', newType, false, true);

    // push the newly build node
    this.gameTree.push(newNode);

  }

  deleteNode() {
    // pop dat node of da tree yo
    // this will pop the click node and any node below it
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
