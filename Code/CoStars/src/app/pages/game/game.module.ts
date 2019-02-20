import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// import needed pages and components
import { GamePage } from './game.page';
import { TreeNodeComponent } from '../../components/tree-node/tree-node.component';
import { AddNodePage } from '../../modals/add-node/add-node.page';
import { InfoModalPage } from 'src/app/modals/info-modal/info-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GamePage, TreeNodeComponent, AddNodePage, InfoModalPage],
  entryComponents: [AddNodePage, InfoModalPage]
})
export class GamePageModule {}
