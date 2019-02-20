import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {

  constructor(
    // make modal object
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  // close the modal
  closeModal() {
    // dimiss the modal
    this.modalController.dismiss();
  }

}
