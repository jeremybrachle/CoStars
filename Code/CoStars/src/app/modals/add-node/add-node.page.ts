import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.page.html',
  styleUrls: ['./add-node.page.scss'],
})
export class AddNodePage implements OnInit {

  // name of new node to be created
  newName: String;

  // input of the new type
  @Input() newType;

  constructor(
    // make modal object
    public modalController: ModalController
    ) { }

  ngOnInit() {
  }

  // send the name back
  sendName() {
    // dismiss with the value in the text field
    this.modalController.dismiss(this.newName);
  }

  // dismiss the modal (same as clicking out)
  closeModal() {
    this.modalController.dismiss();
  }

}
