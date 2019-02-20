import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'levels', loadChildren: './pages/levels/levels.module#LevelsPageModule' },
  { path: 'game', loadChildren: './pages/game/game.module#GamePageModule' },
  { path: 'add-node', loadChildren: './modals/add-node/add-node.module#AddNodePageModule' },
  { path: 'info-modal', loadChildren: './modals/info-modal/info-modal.module#InfoModalPageModule' },
  { path: 'settings-modal', loadChildren: './modals/settings-modal/settings-modal.module#SettingsModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
