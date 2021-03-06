import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LevelsPage } from './levels.page';
import { SettingsModalPage } from '../../modals/settings-modal/settings-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LevelsPage, SettingsModalPage],
  entryComponents: [SettingsModalPage]
})
export class LevelsPageModule {}
