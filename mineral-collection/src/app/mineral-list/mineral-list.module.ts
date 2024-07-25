import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MineralListComponent } from './mineral-list.component';
import { LayoutModule } from '../common/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: MineralListComponent,
}];

@NgModule({
  declarations: [
    MineralListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ],
  exports: [
    MineralListComponent
  ]
})
export class MineralListModule { }
