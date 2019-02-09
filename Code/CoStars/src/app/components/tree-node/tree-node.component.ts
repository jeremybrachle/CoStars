import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  // accepts arguments from the game page
  // name of node(actor's name or title of film)
  @Input() nodeName: string;
  // type of node (actor or movie)
  @Input() nodeType: string;

  constructor() { }

  ngOnInit() {
  }

  addNode() {
    console.log(this.nodeName);
    console.log(this.nodeType);
  }

  deleteNode() {
    console.log('Delete Node!');
  }

}
