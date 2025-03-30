import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'meteorite', loadChildren: () => import('./specimen-page/specimen-page.module').then(m => m.SpecimenPageModule) },
  { path: 'minerals', loadChildren: () => import('./mineral-list/mineral-list.module').then(m => m.MineralListModule) },
  { path: 'meteorites', loadChildren: () => import('./meteorite-list/meteorite-list.module').then(m => m.MeteoriteListModule) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
