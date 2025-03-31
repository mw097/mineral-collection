import {  Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'meteorite/:specimenId', loadComponent: () => import('./specimen-page/specimen-page.component').then(m => m.SpecimenPageComponent) },
  { path: 'minerals', loadComponent: () => import('./mineral-list/mineral-list.component').then(m => m.MineralListComponent) },
  { path: 'meteorites', loadComponent: () => import('./meteorite-list/meteorite-list.component').then(m => m.MeteoriteListComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
  { path: 'wall', loadComponent: () => import('./wall/wall.component').then(m => m.WallComponent)},
];
