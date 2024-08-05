import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoriteListComponent } from './meteorite-list.component';
import { LayoutModule } from '../common/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: MeteoriteListComponent,
}];

@NgModule({
  declarations: [
    MeteoriteListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ]
})
export class MeteoriteListModule { }
