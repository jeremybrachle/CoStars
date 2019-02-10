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
    // push to the game tree
    this.gameTree.push(this.currNode);

  }

  deleteNode() {
    // pop dat node of da tree yo
    this.gameTree.pop();
  }

}
