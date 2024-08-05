import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "minerals/list", loadChildren: () => import('./mineral-list/mineral-list.module').then(m => m.MineralListModule) },
  { path: 'meteorites/list', loadChildren: () => import('./meteorite-list/meteorite-list.module').then(m => m.MeteoriteListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
