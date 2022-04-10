import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './_core/main/main.component';
import { GameComponent } from './_main/game/game/game.component';
import { SpaceComponent } from './_main/space/space/space.component';

const routes: Routes = [
  {
    path: 'space',
    component: SpaceComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: '**',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
